
        function envFlush(a) {___jdce_logger("lacuna_cache/exported_u19ee2.js", 9, 241);
            function b(b) {___jdce_logger("lacuna_cache/exported_u19ee2.js", 44, 118);
                for (var c in a) b[c] = a[c]
            }
            window.requireLazy ? window.requireLazy(["Env"], b) : (window.Env = window.Env || {}, b(window.Env))
        }
        envFlush({
            "ajaxpipe_token": "AXiO5QTYocgJlz8h",
            "timeslice_heartbeat_config": {
                "pollIntervalMs": 33,
                "idleGapThresholdMs": 60,
                "ignoredTimesliceNames": {
                    "requestAnimationFrame": true,
                    "Event listenHandler mousemove": true,
                    "Event listenHandler mouseover": true,
                    "Event listenHandler mouseout": true,
                    "Event listenHandler scroll": true
                },
                "isHeartbeatEnabled": true,
                "isArtilleryOn": false
            },
            "shouldLogCounters": true,
            "timeslice_categories": {
                "react_render": true,
                "reflow": true
            },
            "sample_continuation_stacktraces": true,
            "khsh": "0`sj`e`rm`s-0fdu^gshdoer-0gc^eurf-3gc^eurf;1;enbtldou;fduDmdldourCxO`ld-2YLMIuuqSdptdru;qsnunuxqd;rdoe-0unjdojnx-0unjdojnx0-0gdubi^rdbsduOdv-0`sj`e`r-0q`xm`r-0StoRbs`qhof-0mhoj^q`xm`r",
            "stack_trace_limit": 30,
            "deferred_stack_trace_rate": 1000,
            "timesliceBufferSize": 5000,
            "show_invariant_decoder": false,
            "isCQuick": false
        });
    