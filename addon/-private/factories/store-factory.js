import OrbitStore from '@orbit/memory';

export default {
  create(injections = {}) {
   return new OrbitStore(injections);
  }
}
