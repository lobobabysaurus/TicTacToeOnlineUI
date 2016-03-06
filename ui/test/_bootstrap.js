// Setup chai with plugins
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinonChaiInOrder from 'sinon-chai-in-order';

chai.should();
chai.use(sinonChai);
chai.use(sinonChaiInOrder);

// Setup for absolute paths in testing
import { addPath } from 'app-module-path';

addPath(__dirname + '/../app');
addPath(__dirname);

// Setup fake dom and react testing
import jsdom from 'jsdom';

global.document = jsdom.jsdom('<!doctype html><html><body><body><html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
