  <!doctype html>
  <html>
  <head>
    <meta name="apple-mobile-web-app-capable" content="no">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <meta name="theme-color" content="#5181b8">
    <style>
      html, body {
        margin: 0;
        height: 100%;
        background: white;
        font-family: -apple-system,
          BlinkMacSystemFont,
          Roboto,
          'Segoe UI',
          'Segoe WP',
          'Helvetica Neue',
          'Lucida Grande',
          Verdana,
          Tahoma,
          Arial,
          sans-serif
          !important;
        -webkit-font-smoothing: subpixel-antialiased;
      }

      .main {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .logo {
        width: 80px;
        height: 80px;
        margin-top: -20px;
      }

      .logo svg {
        width: 80px;
        height: 80px;
      }

      .logo-space {
        height: 21%;
      }

      .picture {
        width: 220px;
        height: 220px;
        flex-shrink: 0;
        flex-grow: 0;
        margin-top: -80px;
        background: url('/pwa.php?act=offline_image&ver=200') center center no-repeat;
        background-size: contain;
      }

      .text-1 {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: black;
      }

      .text-2 {
        font-size: 15px;
        font-weight: normal;
        text-align: center;
        color: black;
        margin-top: 6px;
      }

      .button-wrap {
        margin-top: 20px;
      }

      .button {
        background: #5181b8;
        height: 28px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        font-weight: 600;
        border: none;
        padding-left: 10px;
        padding-right: 10px;
      }

      .button[disabled] {
        opacity: 0.6;
      }
    </style>
  </head>
  <body>
    <div class="main">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 283.5">
        <path fill="#4680C2" d="M120,70.9h43.5c39.7,0,49.1,9.4,49.1,49.1v43.5c0,39.7-9.4,49.1-49.1,49.1H120c-39.7,0-49.1-9.4-49.1-49.1V120
          C70.9,80.3,80.3,70.9,120,70.9"/>
        <path fill="#FFFFFF" d="M186.9,119.7c0.7-2.2,0-3.8-3.1-3.8h-10.3c-2.6,0-3.8,1.4-4.5,2.9c0,0-5.3,12.8-12.7,21.1
          c-2.4,2.4-3.5,3.2-4.8,3.2c-0.7,0-1.6-0.8-1.6-3v-20.5c0-2.6-0.8-3.8-3-3.8h-16.2c-1.6,0-2.6,1.2-2.6,2.4c0,2.5,3.7,3.1,4.1,10.1
          v15.2c0,3.3-0.6,3.9-1.9,3.9c-3.5,0-12-12.9-17.1-27.6c-1-2.9-2-4-4.6-4H98.2c-3,0-3.5,1.4-3.5,2.9c0,2.7,3.5,16.3,16.3,34.3
          c8.5,12.3,20.6,18.9,31.5,18.9c6.6,0,7.4-1.5,7.4-4v-9.3c0-3,0.6-3.5,2.7-3.5c1.5,0,4.2,0.8,10.3,6.7c7,7,8.2,10.2,12.1,10.2h10.3
          c3,0,4.4-1.5,3.6-4.4c-0.9-2.9-4.3-7.1-8.7-12.1c-2.4-2.8-6-5.9-7.1-7.4c-1.5-2-1.1-2.8,0-4.6C173,143.5,185.6,125.7,186.9,119.7"/>
        </svg>
      </div>
      <div class="logo-space"></div>
      <div class="picture"></div>
      <div class="text-1">Internet Connection Lost</div>
      <div class="text-2">Please try again later</div>
      <div class="button-wrap">
        <button type="button" class="button" id="refresh">
          Try Again
        </button>
      </div>
      <div class="logo-space"></div>
    </div>
    <script>
      const refresh = document.getElementById('refresh');

      refresh.onclick = function(e) {
        e.preventDefault();
        refresh.disabled = true;

        if (navigator.onLine === false) {
          setTimeout(function() {
            refresh.disabled = false;
          }, 500);
        } else {
          location.reload();
        }
      };
    </script>
  </body>
  </html>