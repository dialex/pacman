function StartupScene(game) {
  this._game = game;
  this._pressEnterText = new PressEnterText();

  this._pacman = new Pacman(this, game);
  this._pacman.setStrategy(new PacmanStartupSceneStrategy(this._pacman, this));
  this._pacman.setCurrentSpeed(4);
  this._pacman.setSpeed(4);
  this._pacman.setPosition(new Position(90, 160));
  this._pacman.setDirection(DIRECTION_RIGHT);
}

StartupScene.prototype.keyPressed = function (key) {
  if (key == KEY_ENTER) {
    this._game.setScene(new PlayScene(this._game));
  }
};

StartupScene.prototype.tick = function () {
  this._pressEnterText.tick();
  this._pacman.tick();
};

StartupScene.prototype.draw = function (ctx) {
  this._drawTitle(ctx);
  this._drawControlsHelp(ctx);
  this._pressEnterText.draw(ctx);
  this._pacman.draw(ctx);
};

StartupScene.prototype.getX = function () {
  return 0;
};

StartupScene.prototype.getY = function () {
  return 0;
};

StartupScene.prototype._drawTitle = function (ctx) {
  ctx.fillStyle = "#ffff00";
  ctx.font = "bold 69px 'Lucida Console', Monaco, monospace"
  ctx.fillText("the DEVourer", 30, 150);
};

StartupScene.prototype._drawControlsHelp = function (ctx) {
  ctx.fillStyle = "#dedede";
  ctx.font = "bold 14px 'Lucida Console', Monaco, monospace"
  ctx.fillText("to attend another meetup", 170, 300);
};
