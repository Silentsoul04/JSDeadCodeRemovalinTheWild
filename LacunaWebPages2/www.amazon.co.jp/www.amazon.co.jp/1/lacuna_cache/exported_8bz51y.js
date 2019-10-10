
                            if (typeof uet === 'function' && typeof ues === 'function') {
                                var scope = 'gateway_atf_gateway-mWeb';
                                var placementId = '3ea9aa20-24ec-4c61-b311-cb4c2443419f';
                                ues('wb', 'adplacements:' + scope.replace(/\_/g, ':'), {
                                    wb: 1
                                });
                                uet('bb', 'adplacements:' + scope.replace(/\_/g, ':'), {
                                    wb: 1
                                });
                                if (placementId) {
                                    ues('wb', 'adplacements:' + placementId, {
                                        wb: 1
                                    });
                                    uet('bb', 'adplacements:' + placementId, {
                                        wb: 1
                                    });
                                }
                            }
                        