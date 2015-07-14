import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['navbar-fixed'],
	didInsertElement() {
		this._super(...arguments);
		this.$(".button-collapse").sideNav();
	}
});
