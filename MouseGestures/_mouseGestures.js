GESTURES = {
	'LR': {
		name: '关闭WordHighlightToolbar',
		cmd: function() {
			window.gWHT.destroyToolbar();
		}
	},
	'U': {
		name: '页面顶部',
		cmd: function(gestures, event) {
			var doc = event.target.ownerDocument;
			var win = doc.defaultView;
			win.scrollTo(0, 0);
		}
	},
	'D': {
		name: '页面底部',
		cmd: function(gestures, event) {
			var doc = event.target.ownerDocument;
			var win = doc.defaultView;
			win.scrollTo(0, 10000000000);
		}
	},
	'L': {
		name: '后退/上一页',
		cmd: function() {
			var nav = gBrowser.webNavigation;
			if (nav.canGoBack) nav.goBack();
			else nextPage.next();
		}
	},
	'R': {
		name: '前进/下一页',
		cmd: function() {
			var nav = gBrowser.webNavigation;
			if (nav.canGoForward) nav.goForward();
			else nextPage.next(true);
		}
	},
	'UL': {
		name: '上个标签页',
		cmd: function() {
			gBrowser.mTabContainer.advanceSelectedTab(-1, true);
		}
	},
	'UR': {
		name: '下个标签页',
		cmd: function() {
			gBrowser.mTabContainer.advanceSelectedTab(+1, true);
		}
	},
	'DR': {
		name: '关闭当前标签页',
		cmd: function() {
			gBrowser.removeCurrentTab();
		}
	},
	'DL': {
		name: '撤销关闭标签页',
		cmd: function() {
			try {
				document.getElementById('History:UndoCloseTab').doCommand();
			} catch (ex) {
				if ('undoRemoveTab' in gBrowser) gBrowser.undoRemoveTab();
				else throw "Session Restore feature is disabled."
			}
		}
	},
	'LU': {
		name: '关闭重复标签',
		cmd: function() {
			CloseRepeatedTabs();
		}
	},
	'RU': {
		name: '侧边栏',
		cmd: function() {
			toggleSidebar();
		}
	},
	'LD': {
		name: '最小化窗口',
		cmd: function() {
			window.minimize();
		}
	},
	'RD': {
		name: 'GrabScroll',
		cmd: function() {
			GrabScroll.toggle();
		}
	},
	'DU': {
		name: '刷新',
		cmd: function() {
			document.getElementById("Browser:Reload").doCommand();
		}
	},
	'DUD': {
		name: '强制刷新',
		cmd: function() {
			document.getElementById("Browser:ReloadSkipCache").doCommand();
		}
	},
	'ULR': {
		name: '最大化/恢复窗口',
		cmd: function() {
			window.windowState == 1 ? window.restore() : window.maximize();
		}
	},
	'DLR': {
		name: '清除startupCache并重启浏览器',
		cmd: function() {
			Services.appinfo.invalidateCachesOnRestart() || Application.restart();
		}
	},
	'DRL': {
		name: '关闭其他标签页',
		cmd: function() {
			gBrowser.removeAllTabsBut(gBrowser.mCurrentTab);
		}
	},
	'LUD': {
		name: '关闭左侧所有标签页',
		cmd: function() {
			var tabs = gBrowser.mTabContainer.childNodes;
			for (var i = tabs.length - 1; tabs[i] != gBrowser.mCurrentTab; i--) {}
			for (i--; i >= 0; i--) {
				gBrowser.removeTab(tabs[i]);
			}
		}
	},
	'RUD': {
		name: '关闭右侧所有标签页',
		cmd: function() {
			var tabs = gBrowser.mTabContainer.childNodes;
			for (var i = tabs.length - 1; tabs[i] != gBrowser.selectedTab; i--) {
				gBrowser.removeTab(tabs[i]);
			}
		}
	},
	'L>R': {
		name: '重置缩放',
		cmd: function() {
			FullZoom.reset();
		}
	},
	'L<R': {
		name: '重置缩放',
		cmd: function() {
			FullZoom.reset();
		}
	},
}