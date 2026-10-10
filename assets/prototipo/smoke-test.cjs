const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
for (const path of ['styles.css', 'app.js', 'documento/plano-prodart.html']) {
  assert(fs.existsSync(path), `Arquivo ausente: ${path}`);
}
const requiredIds = ['fairSearch', 'fairCategory', 'fairCount', 'fairCards', 'mapMarkers', 'fairDetail', 'artisanCards', 'artisanSelect', 'portalStats', 'portalContent', 'menuButton', 'toast'];
for (const id of requiredIds) assert(html.includes(`id="${id}"`), `Elemento ausente: ${id}`);

const elements = new Map();
function element(selector) {
  if (!elements.has(selector)) elements.set(selector, {
    value: selector === '#fairCategory' ? 'all' : '', innerHTML: '', textContent: '', dataset: {},
    classList: { add() {}, remove() {}, toggle() {} },
    addEventListener() {}, setAttribute() {}, querySelectorAll() { return []; }, insertAdjacentHTML() {}
  });
  return elements.get(selector);
}
const storage = new Map();
const context = vm.createContext({
  document: { querySelector: element, querySelectorAll: () => [] },
  localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
  FormData: class { constructor() { this.values = new Map([['name','Teste Silva'],['craft','Cerâmica'],['neighborhood','Várzea'],['products','vasos, peças'],['story','Cerâmica autoral de teste'],['consent','on']]); } get(key) { return this.values.get(key); } has(key) { return this.values.has(key); } },
  setTimeout: () => 1, clearTimeout() {}, Date, Intl, console
});
vm.runInContext(fs.readFileSync('app.js', 'utf8'), context);
assert(element('#fairCards').innerHTML.includes('Feira do Marco Zero'));
assert(element('#artisanCards').innerHTML.includes('Ana Lúcia Santos'));
vm.runInContext("apply('marco-zero')", context);
assert(JSON.parse(storage.get('prodart-demo-applications-v1')).length === 1);
assert(element('#portalContent').innerHTML.includes('Inscrito'));
vm.runInContext("selectedTab='registration';renderPortal()", context);
assert(element('#portalContent').innerHTML.includes('registrationForm'));
vm.runInContext("registerArtisan({preventDefault(){},currentTarget:{reportValidity(){return true}}})", context);
assert(JSON.parse(storage.get('prodart-demo-artisans-v1')).length === 1);
assert(element('#artisanCards').innerHTML.includes('Teste Silva'));
console.log('Smoke test: arquivos, renderização inicial, candidatura e cadastro OK');
