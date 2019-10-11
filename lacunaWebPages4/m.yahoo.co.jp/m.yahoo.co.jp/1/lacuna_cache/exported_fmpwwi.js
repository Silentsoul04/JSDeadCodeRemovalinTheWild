
        var UserActionLogger;

        if (window.YAHOO && YAHOO.i13n && YAHOO.i13n.JP && YAHOO.i13n.JP.UserAction) {
            UserActionLogger = YAHOO.i13n.JP.UserAction();

            UserActionLogger
                .addModules(YJ_MTOP_CONFIG.user_action_logger.modules || [])
                .addPageParam(YJ_MTOP_CONFIG.user_action_logger.pageParams || {})
                .enableAutoOffset();
        }
    