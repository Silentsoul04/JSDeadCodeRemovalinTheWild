# JSDeadCodeRemovalinTheWild


| Webpage | Redirect | Login  | 0 | 1 | 2 | 3 |
| ------------------------------------ |:---:| :---:| :---:| :---: | :---: | :---:|
| m.youtube.com | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :heavy_check_mark: |
| www.amazon.com | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :heavy_check_mark: |
| www.apple.com | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :heavy_check_mark: |
| www.baidu.com | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :heavy_check_mark: |
| www.linkedin.com | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |  :x: |
| www.tmall.com | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: | :x: |  :x: |
| www.wikipedia.org | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |  :heavy_check_mark: |
| www.yahoo.com | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: |  :x: |
| xw.qq.com | :heavy_check_mark: | :heavy_check_mark: | :x: | :x: | :x: |  :x: |


## Analyse www.linkdin.com
- Tajs missing functionality
```JavaScript 
        function getDfd() {
            let yFn, nFn;
            const p = new Promise((y, n) => {
                yFn = y;
                nFn = n;
            });
            p.resolve = yFn;
            p.reject = nFn;
            return p;
        }
        window.lazyloader = getDfd();
        window.tracking = getDfd();
        window.impressionTracking = getDfd();
```
- exception: Only var/const declarations supported, let is not supported
