function easeInOut(o,n,e,t){return o/=t/2,1>o?e/2*o*o+n:(o-=1,-e/2*(o*(o-2)-1)+n)}function scrollTo(o,n,e){var t=o.scrollTop,c=n-t,l=20,u=function(n){n+=l;var r=easeInOut(n,t,c,e);o.scrollTop=r,e>n&&setTimeout(function(){u(n)},l)};u(0)}var el=document.getElementById("toTop");el.addEventListener("click",function(){scrollTo(document.body,0,1250)});