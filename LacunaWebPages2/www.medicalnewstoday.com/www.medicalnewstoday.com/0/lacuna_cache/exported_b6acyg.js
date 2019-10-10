
            // 1. create object of script
            var deferCSS = document.createElement('script');
            deferCSS.src = 'https://hello.myfonts.net/count/333229';
            deferCSS.type = 'text/javascript';
            deferCSS.defer = true;

            // 2. declaire position of </body>
            var deferCSS_place = document.getElementsByTagName('body')[0];

            // 3. insert object before </body>
            deferCSS_place.appendChild(deferCSS);
        