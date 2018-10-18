/* eslint-disable new-cap */
'use strict';

module.exports = {
  name: require('./package').name,

  treeForAddon(tree) {
    let host = this.app || this.parent;
    let orbitOptions = host.options && host.options.orbit;
    let customPackages = orbitOptions && orbitOptions.packages;

    if (customPackages) {
      this.ui.writeDeprecateLine('Now that ember-orbit uses ember-auto-import, it is no longer necessary to specify custom `packages` as an `orbit` option in your project\'s `ember-cli-build.js`.')
    }

    return this._super.treeForAddon.call(this, tree);
  }
};
