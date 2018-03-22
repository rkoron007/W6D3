const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data('id');
    this.followState = this.$el.data('status');
    this.render();
    this.$el.on('click', (e) => this.handleClick(e));
  }

   handleClick(e) {
      e.preventDefault();
      if (!this.followState){
        APIUtil.followUser(this.userId).then(() => {
          this.followState = !this.followState;
          this.render();
        });
      } else {
        APIUtil.unfollowUser(this.userId).then(() => {
          this.followState = !this.followState;
          this.render();
        });
      }
    }


  render(){
    if (!this.followState){
      this.$el.text("Follow!");}
    if (this.followState){
      this.$el.text("Unfollow!");
    }
  }
}


module.exports = FollowToggle;
