
            vanillaAjax("https://pavlov-prod.healthline.com/api/metrics", "POST", '{"metrics":[{"type":"increment","name":"ui.pageview"}],"build":"1","route":"php","path":"/","formfactor":"mobile","site":"mnt","abSegment":"gdpr-subject"}', '{"Content-Type":"text\/plain;charset=UTF-8"}');
        