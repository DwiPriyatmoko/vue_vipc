import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import CompositionComponent from './components/CompositionComponent.vue';
import OptionsComponent from './components/OptionsComponent.vue';

const app = createApp(App);
// Register global components or plugins here if needed
app
  .component('CompositionComponent', CompositionComponent)
  .component('OptionsComponent', OptionsComponent);

app.mount('#app');
