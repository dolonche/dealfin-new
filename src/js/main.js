document.addEventListener("DOMContentLoaded", function () {
  Barba.Pjax.init(), Barba.Prefetch.init();
  var e = Barba.BaseTransition.extend({
    start: function () {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this))
    },
    fadeOut: function () {
      return $(this.oldContainer).animate({
        opacity: 0
      }).promise()
    },
    fadeIn: function () {
      var e = this,
        a = $(this.newContainer);
      $(this.oldContainer).hide(), a.css({
        visibility: "visible",
        opacity: 0
      }), a.animate({
        opacity: 1
      }, 200, function () {
        e.done()
      })
    }
  });
  Barba.Pjax.getTransition = function () {
    return e
  }, Barba.Dispatcher.on("initStateChange", function (e, a) {
    $("#barba-wrapper").addClass("transition"), $(".header .uMenuRoot a").click(function () {
      $(".header .uMenuRoot a").removeClass("uMenuItemA"), $(this).addClass("uMenuItemA")
    })
  }), Barba.Dispatcher.on("transitionCompleted", function (e) {
    $("#barba-wrapper").removeClass("transition"), window.scrollTo(0, wrapper.getBoundingClientRect().top)
  }), Barba.Dispatcher.on("newPageReady", function (e, a, n, t) {
    var i = $("<head />").html($.parseHTML(t.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0], document, !0)),
      r = ["script[src*='uutils.fcg']", "meta[name='keywords']", "meta[name='description']", "meta[property^='og']", "meta[name^='twitter']", "meta[itemprop]", "link[itemprop]", "link[rel='prev']", "link[rel='next']", "link[rel='canonical']"].join(",");
    $("head").find(r).remove(), i.find(r).appendTo("head")
  }), Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck, Barba.Pjax.preventCheck = function (e, a) {
    return !!Barba.Pjax.originalPreventCheck(e, a) && (!/.pdf/.test(a.href.toLowerCase()) && !(a.href > -1))
  }
});
new WOW().init();
var degress = 0,
  timer = setInterval(function () {
    degress++;
    document.querySelector('.screen').style.backgroundImage = 'linear-gradient(' + degress + 'deg, #fff, #3972E4)';
  }, 4000 / 360);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiQmFyYmEiLCJQamF4IiwiaW5pdCIsIlByZWZldGNoIiwiRmFkZVRyYW5zaXRpb24iLCJCYXNlVHJhbnNpdGlvbiIsImV4dGVuZCIsInN0YXJ0IiwiUHJvbWlzZSIsImFsbCIsInRoaXMiLCJuZXdDb250YWluZXJMb2FkaW5nIiwiZmFkZU91dCIsInRoZW4iLCJmYWRlSW4iLCJiaW5kIiwiJCIsIm9sZENvbnRhaW5lciIsImFuaW1hdGUiLCJvcGFjaXR5IiwicHJvbWlzZSIsIl90aGlzIiwiJGVsIiwibmV3Q29udGFpbmVyIiwiaGlkZSIsImNzcyIsInZpc2liaWxpdHkiLCJkb25lIiwiZ2V0VHJhbnNpdGlvbiIsIkRpc3BhdGNoZXIiLCJvbiIsIkhUTUxFbGVtZW50IiwiTW91c2VFdmVudCIsImFkZENsYXNzIiwiY2xpY2siLCJyZW1vdmVDbGFzcyIsImN1cnJlbnRTdGF0dXMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsIndyYXBwZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJvbGRTdGF0dXMiLCJjb250YWluZXIiLCJuZXdQYWdlUmF3SFRNTCIsIiRuZXdQYWdlSGVhZCIsImh0bWwiLCJwYXJzZUhUTUwiLCJtYXRjaCIsImhlYWRUYWdzIiwiam9pbiIsImZpbmQiLCJyZW1vdmUiLCJhcHBlbmRUbyIsIm9yaWdpbmFsUHJldmVudENoZWNrIiwicHJldmVudENoZWNrIiwiZXZ0IiwiZWxlbWVudCIsInRlc3QiLCJocmVmIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBQSxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBQzVDQyxNQUFNQyxLQUFLQyxPQUNYRixNQUFNRyxTQUFTRCxPQUVmLElBQUlFLEVBQWlCSixNQUFNSyxlQUFlQyxRQUN4Q0MsTUFBTyxXQUNMQyxRQUFRQyxLQUFLQyxLQUFLQyxvQkFBcUJELEtBQUtFLFlBQVlDLEtBQUtILEtBQUtJLE9BQU9DLEtBQUtMLFFBRWhGRSxRQUFTLFdBQ1AsT0FBT0ksRUFBRU4sS0FBS08sY0FBY0MsU0FDMUJDLFFBQVMsSUFDUkMsV0FFTE4sT0FBUSxXQUNOLElBQUlPLEVBQVFYLEtBQ1JZLEVBQU1OLEVBQUVOLEtBQUthLGNBQ2pCUCxFQUFFTixLQUFLTyxjQUFjTyxPQUNyQkYsRUFBSUcsS0FDRkMsV0FBWSxVQUNaUCxRQUFTLElBRVhHLEVBQUlKLFNBQ0ZDLFFBQVMsR0FDUixJQUFLLFdBQ05FLEVBQU1NLFlBS1ozQixNQUFNQyxLQUFLMkIsY0FBZ0IsV0FDekIsT0FBT3hCLEdBR1RKLE1BQU02QixXQUFXQyxHQUFHLGtCQUFtQixTQUFTQyxFQUFhQyxHQUMzRGhCLEVBQUUsa0JBQWtCaUIsU0FBUyxjQUM3QmpCLEVBQUUsd0JBQXdCa0IsTUFBTSxXQUM5QmxCLEVBQUUsd0JBQXdCbUIsWUFBWSxjQUN0Q25CLEVBQUVOLE1BQU11QixTQUFTLGtCQUlyQmpDLE1BQU02QixXQUFXQyxHQUFHLHNCQUF1QixTQUFTTSxHQUNsRHBCLEVBQUUsa0JBQWtCbUIsWUFBWSxjQUNoQ0UsT0FBT0MsU0FBUyxFQUFHQyxRQUFRQyx3QkFBd0JDLE9BR3JEekMsTUFBTTZCLFdBQVdDLEdBQUcsZUFBZ0IsU0FBU00sRUFBZU0sRUFBV0MsRUFBV0MsR0FDaEYsSUFBSUMsRUFBZTdCLEVBQUUsWUFBWThCLEtBQy9COUIsRUFBRStCLFVBQ0FILEVBQWVJLE1BQU0sa0NBQWtDLEdBQUlsRCxVQUFVLElBQ3JFbUQsR0FBWSw0QkFBNkIsd0JBQXlCLDJCQUE0Qix1QkFBd0Isd0JBQXlCLGlCQUFrQixpQkFBa0IsbUJBQW9CLG1CQUFvQix5QkFBeUJDLEtBQUssS0FDN1BsQyxFQUFFLFFBQVFtQyxLQUFLRixHQUFVRyxTQUN6QlAsRUFBYU0sS0FBS0YsR0FBVUksU0FBUyxVQUd2Q3JELE1BQU1DLEtBQUtxRCxxQkFBdUJ0RCxNQUFNQyxLQUFLc0QsYUFFN0N2RCxNQUFNQyxLQUFLc0QsYUFBZSxTQUFTQyxFQUFLQyxHQUN0QyxRQUFLekQsTUFBTUMsS0FBS3FELHFCQUFxQkUsRUFBS0MsTUFJdEMsT0FBT0MsS0FBS0QsRUFBUUUsS0FBS0Msa0JBSXpCSCxFQUFRRSxNQUFRIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgQmFyYmEuUGpheC5pbml0KCk7XG4gIEJhcmJhLlByZWZldGNoLmluaXQoKTtcbiAgXG4gIHZhciBGYWRlVHJhbnNpdGlvbiA9IEJhcmJhLkJhc2VUcmFuc2l0aW9uLmV4dGVuZCh7XG4gICAgc3RhcnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMubmV3Q29udGFpbmVyTG9hZGluZywgdGhpcy5mYWRlT3V0KCldKS50aGVuKHRoaXMuZmFkZUluLmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgZmFkZU91dDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJCh0aGlzLm9sZENvbnRhaW5lcikuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0pLnByb21pc2UoKTtcbiAgICB9LFxuICAgIGZhZGVJbjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyICRlbCA9ICQodGhpcy5uZXdDb250YWluZXIpO1xuICAgICAgJCh0aGlzLm9sZENvbnRhaW5lcikuaGlkZSgpO1xuICAgICAgJGVsLmNzcyh7XG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSk7XG4gICAgICAkZWwuYW5pbWF0ZSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLmRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIFxuICBCYXJiYS5QamF4LmdldFRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gRmFkZVRyYW5zaXRpb247XG4gIH07XG4gIFxuICBCYXJiYS5EaXNwYXRjaGVyLm9uKCdpbml0U3RhdGVDaGFuZ2UnLCBmdW5jdGlvbihIVE1MRWxlbWVudCwgTW91c2VFdmVudCkge1xuICAgICQoJyNiYXJiYS13cmFwcGVyJykuYWRkQ2xhc3MoJ3RyYW5zaXRpb24nKTtcbiAgICAkKFwiLmhlYWRlciAudU1lbnVSb290IGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAkKFwiLmhlYWRlciAudU1lbnVSb290IGFcIikucmVtb3ZlQ2xhc3MoXCJ1TWVudUl0ZW1BXCIpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInVNZW51SXRlbUFcIik7XG4gICAgfSk7XG4gIH0pO1xuICBcbiAgQmFyYmEuRGlzcGF0Y2hlci5vbigndHJhbnNpdGlvbkNvbXBsZXRlZCcsIGZ1bmN0aW9uKGN1cnJlbnRTdGF0dXMpIHtcbiAgICAkKCcjYmFyYmEtd3JhcHBlcicpLnJlbW92ZUNsYXNzKCd0cmFuc2l0aW9uJyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcbiAgfSk7XG4gIFxuICBCYXJiYS5EaXNwYXRjaGVyLm9uKCduZXdQYWdlUmVhZHknLCBmdW5jdGlvbihjdXJyZW50U3RhdHVzLCBvbGRTdGF0dXMsIGNvbnRhaW5lciwgbmV3UGFnZVJhd0hUTUwpIHtcbiAgICB2YXIgJG5ld1BhZ2VIZWFkID0gJCgnPGhlYWQgLz4nKS5odG1sKFxuICAgICAgJC5wYXJzZUhUTUwoXG4gICAgICAgIG5ld1BhZ2VSYXdIVE1MLm1hdGNoKC88aGVhZFtePl0qPihbXFxzXFxTLl0qKTxcXC9oZWFkPi9pKVswXSwgZG9jdW1lbnQsIHRydWUpKTtcbiAgICB2YXIgaGVhZFRhZ3MgPSBbXCJzY3JpcHRbc3JjKj0ndXV0aWxzLmZjZyddXCIsIFwibWV0YVtuYW1lPSdrZXl3b3JkcyddXCIsIFwibWV0YVtuYW1lPSdkZXNjcmlwdGlvbiddXCIsIFwibWV0YVtwcm9wZXJ0eV49J29nJ11cIiwgXCJtZXRhW25hbWVePSd0d2l0dGVyJ11cIiwgXCJtZXRhW2l0ZW1wcm9wXVwiLCBcImxpbmtbaXRlbXByb3BdXCIsIFwibGlua1tyZWw9J3ByZXYnXVwiLCBcImxpbmtbcmVsPSduZXh0J11cIiwgXCJsaW5rW3JlbD0nY2Fub25pY2FsJ11cIl0uam9pbignLCcpO1xuICAgICQoJ2hlYWQnKS5maW5kKGhlYWRUYWdzKS5yZW1vdmUoKTtcbiAgICAkbmV3UGFnZUhlYWQuZmluZChoZWFkVGFncykuYXBwZW5kVG8oJ2hlYWQnKTtcbiAgfSk7XG5cbiAgQmFyYmEuUGpheC5vcmlnaW5hbFByZXZlbnRDaGVjayA9IEJhcmJhLlBqYXgucHJldmVudENoZWNrO1xuXG4gIEJhcmJhLlBqYXgucHJldmVudENoZWNrID0gZnVuY3Rpb24oZXZ0LCBlbGVtZW50KSB7XG4gICAgaWYgKCFCYXJiYS5QamF4Lm9yaWdpbmFsUHJldmVudENoZWNrKGV2dCwgZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoLy5wZGYvLnRlc3QoZWxlbWVudC5ocmVmLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQuaHJlZiA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59KTsiXX0=