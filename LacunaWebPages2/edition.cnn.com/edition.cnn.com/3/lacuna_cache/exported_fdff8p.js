
        (function setRefDom(win, doc, registryFile) {
            var edition = ((registryFile && registryFile.split('_')[0]) || 'international').toUpperCase(),
                host = doc.referrer.replace(/^http(?:s)?\:\/\/([\w\-\.]+).*$/i, '$1').toLowerCase();
            win[edition] = win[edition] || {};
            win[edition].adTargets = window[edition].adTargets || {};
            if (host.search(/^([\w\-]+\.)*money\.cnn\.com$/) >= 0) {
                win[edition].adTargets.refdom = 'money';
            } else if (host.search(/^([\w\-]+\.)*(www|us|edition|next)\.cnn\.com$/) >= 0) {
                win[edition].adTargets.refdom = 'cnn';
            } else if (host === 't.co') {
                win[edition].adTargets.refdom = 'twitter';
            } else if (host.search(/^([\w\-]+\.)*facebook\.com$/) >= 0) {
                win[edition].adTargets.refdom = 'facebook';
            } else if (host.search(/^([\w\-]+\.)*google\.\w{2,3}(\.\w\w)?$/) >= 0) {
                win[edition].adTargets.refdom = 'google';
            } else {
                win[edition].adTargets.refdom = 'other';
            }
            CNN.getRefDom = function getRefDom() {
                return win[edition].adTargets.refdom;
            };
            if (CNN.PageParams && typeof CNN.PageParams.adkey === 'string') {
                win[edition].adTargets.adkey = CNN.PageParams.adkey;
            }
            CNN.getAdkey = function getAdkey() {
                return win[edition].adTargets.adkey || null;
            };
            if (typeof CNN.contentModel === 'object' && typeof CNN.contentModel.analytics === 'object' && typeof CNN.contentModel.analytics.cap_topics === 'string') {
                win[edition].adTargets.capTopics = CNN.contentModel.analytics.cap_topics.split(/,\s*/);
            }
            if (CNN.contentModel.analytics.cep_topics) {
                win[edition].cep_topics = {
                    cep_brsf: CNN.contentModel.analytics.cep_topics.brsf,
                    cep_iabt: CNN.contentModel.analytics.cep_topics.iabt,
                    cep_sent: CNN.contentModel.analytics.cep_topics.sent,
                    cep_tags: CNN.contentModel.analytics.cep_topics.tags
                };
            } else {
                win[edition].cep_topics = {};
            }
            CNN.adTargets = win[edition].adTargets;
            CNN.cep_topics = win[edition].cep_topics;
            CNN.getCepTopics = function getCepTopics() {
                var cepTopics = {};

                function addTopicType(topics, topicType) {
                    var i;
                    if (Array.isArray(topics)) {
                        for (i = 0; i < topics.length; i++) {
                            cepTopics[topics[i]] = topicType;
                        }
                    }
                }
                if (win[edition].cep_topics) {
                    addTopicType(win[edition].cep_topics.cep_brsf, 'cep_brsf');
                    addTopicType(win[edition].cep_topics.cep_iabt, 'cep_iabt');
                    addTopicType(win[edition].cep_topics.cep_sent, 'cep_sent');
                    addTopicType(win[edition].cep_topics.cep_tags, 'cep_tags');
                }
                return cepTopics;
            };
            CNN.getCapTopics = function getCapTopics() {
                var capTopics = {},
                    i, topics;
                if (Array.isArray(win[edition].adTargets.capTopics) && win[edition].adTargets.capTopics[0] && win[edition].adTargets.capTopics[0] !== 'no-value-set') {
                    topics = win[edition].adTargets.capTopics;
                    for (i = 0; i < topics.length; i++) {
                        capTopics[topics[i]] = 'cap';
                    }
                }
                return capTopics;
            };
            CNN.getProximicData = function getProximicData() {
                var proximicValues = {},
                    i;
                if (Array.isArray(window.proximicData)) {
                    for (i = 0; i < window.proximicData.length; i++) {
                        proximicValues[window.proximicData[i]] = 'pconid';
                    }
                }
                return proximicValues;
            };
        }(window, document, 'cnni_homepage'));
        CNN.getSpecBranding = function getSpecBranding() {
            return null;
        };
    