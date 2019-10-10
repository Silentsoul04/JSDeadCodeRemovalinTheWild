
                    (function(d) {
                        var s = d.visibilityState;
                        if (s && s !== "visible") {
                            d.addEventListener("visibilitychange", function c() {
                                if (d.visibilityState === "visible") {
                                    d.removeEventListener("visibilitychange", c, false);
                                    i()
                                }
                            }, false)
                        } else {
                            i()
                        }

                        function i() {
                            (new Image).src = "https://yabs.yandex.ru/count/0SphJ8HeuR050EO04820W04nNnUVNG00000umeeMy0BwxlZz3V050Q06x0791bXZkFn3kHmFqGPOz-rpHBaS3za60000uBK0002f1_kBT60NTj5IW0e1Y0e1gWiGE_npoVkB000SL6ZAZ9G50C0BWAC5o0k0r9C1y0i3u0q2c0xOnk7blwYkZW_W3m6G49QyykNcyO3LTlWG3u0H3eWH0P0H0wWHm8Gz-X4P3G00000L000001q000009G00000j00000F0I3eWJ1f0JCi0J____________0TeJ2WW0400O0200A000=sBLz-T40G0H80c3c372CwU_J3P01dkh_fpIO0Pxg_wSqk06CwU_J3TW1gf-M3-W1Z0AG0_33W6-m0mAe1km1i0U0W9Wqq0S2yGS0000000000FW70O080T08W8Y0WO20W8200V08nlJtwGQ02W712W0000000F0_s0e2u0g0YNhP2_kBT60NTj5Iw0mRYGu00000003mFv0Em8Gze0x0X3sX3m0000000F0_sGy00000003mFu0GrO_B1yWG2AWHm8GzY181a181s1AUW1YO4m40?wmode=0"
                        }
                    })(document);
                