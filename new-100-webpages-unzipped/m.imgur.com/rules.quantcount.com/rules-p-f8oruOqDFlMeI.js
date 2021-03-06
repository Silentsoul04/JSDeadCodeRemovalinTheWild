/*
 Quantcast measurement tag
 Copyright (c) 2008-2019, Quantcast Corp.
*/
(function(a, f, e) {
    var g = function(b) {
            var a = e.createElement("a");
            a.href = b;
            return a
        },
        k = function(b, a, c) {
            return b ? "nc" === b ? !a || !c || 0 > a.indexOf(c) : "eq" === b ? a === c : "sw" === b ? 0 === a.indexOf(c) : "ew" === b ? (b = a.length - c.length, a = a.lastIndexOf(c, b), -1 !== a && a === b) : "c" === b ? 0 <= a.indexOf(c) : !1 : !1
        },
        b = function(a, b, c) {
            var d;
            d = f.top === f.self ? e.location.href : g(e.referrer).href;
            k(b, d, c) ? a(d) : a(!1)
        },
        c = function(a) {
            return "array" === {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase() ? {
                labels: a.join(",")
            } : {
                labels: "" + a
            }
        },
        b = ["rules", [a, null, [
                    [c, "Tags.NSFW"]
                ],
                [
                    [b, "c", "NSFW"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cursed Images"]
                ],
                [
                    [b, "c", "cursed_images"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Science"]
                ],
                [
                    [b, "c", "science"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Gifs"]
                ],
                [
                    [b, "c", "gif"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Wallpapers"]
                ],
                [
                    [b, "c", "wallpapers"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Satisfying"]
                ],
                [
                    [b, "c", "satisfying"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cars"]
                ],
                [
                    [b, "c", "cars"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Doggo"]
                ],
                [
                    [b, "c", "doggo"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cosplay Girls"]
                ],
                [
                    [b, "c", "cosplay_girls"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Hot"]
                ],
                [
                    [b,
                        "c", "hot"
                    ]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cool"]
                ],
                [
                    [b, "c", "cool"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Oddly Satisfying"]
                ],
                [
                    [b, "c", "oddly_satisfying"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Mature"]
                ],
                [
                    [b, "c", "mature"]
                ]
            ],
            [a, null, [
                    [c, "Tags.rhm"]
                ],
                [
                    [b, "c", "rhm"]
                ]
            ],
            [a, null, [
                    [c, "Tags.tht"]
                ],
                [
                    [b, "c", "tht"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Hentai"]
                ],
                [
                    [b, "c", "hentai"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Puppy"]
                ],
                [
                    [b, "c", "puppy"]
                ]
            ],
            [a, null, [
                    [c, "Tags.lol"]
                ],
                [
                    [b, "c", "lol"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Animals"]
                ],
                [
                    [b, "c", "animals"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Meme Dump"]
                ],
                [
                    [b, "c", "meme_dump"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Wallpaper"]
                ],
                [
                    [b, "c", "wallpaper"]
                ]
            ],
            [a, null, [
                    [c, "Tags.gif"]
                ],
                [
                    [b, "c", "gif"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Sexy"]
                ],
                [
                    [b, "c", "sexy"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Dump"]
                ],
                [
                    [b, "c", "dump"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Mildly Interesting"]
                ],
                [
                    [b, "c", "mildly_interesting"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cute"]
                ],
                [
                    [b, "c", "cute"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Video Games"]
                ],
                [
                    [b, "c", "video_games"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Dogs"]
                ],
                [
                    [b, "c", "dogs"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Food"]
                ],
                [
                    [b, "c", "food"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Comic"]
                ],
                [
                    [b, "c", "comic"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Dark Memes"]
                ],
                [
                    [b, "c", "dark_memes"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Funny Gifs"]
                ],
                [
                    [b, "c", "funny_gifs"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Dogs Are The Best People"]
                ],
                [
                    [b, "c", "dogs_are_the_best_people"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cats"]
                ],
                [
                    [b, "c", "cats"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Wholesome"]
                ],
                [
                    [b, "c", "wholesome"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Photography"]
                ],
                [
                    [b, "c", "photography"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Meme"]
                ],
                [
                    [b, "c", "meme"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Game of Thrones"]
                ],
                [
                    [b, "c", "game_of_thrones"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Star Trek"]
                ],
                [
                    [b, "c", "star_trek"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Camping"]
                ],
                [
                    [b, "c", "camping"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Hiking"]
                ],
                [
                    [b, "c", "hiking"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Futurama"]
                ],
                [
                    [b, "c", "futurama"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Pizza"]
                ],
                [
                    [b, "c", "pizza"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Lego"]
                ],
                [
                    [b, "c", "lego"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Rick and Morty"]
                ],
                [
                    [b, "c", "rick_and_morty"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Minecraft"]
                ],
                [
                    [b, "c", "minecraft"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Physics"]
                ],
                [
                    [b, "c", "physics"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Illustration"]
                ],
                [
                    [b, "c", "illustration"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Harry Potter"]
                ],
                [
                    [b, "c", "harry_potter"]
                ]
            ],
            [a,
                null, [
                    [c, "Tags.Pokemon"]
                ],
                [
                    [b, "c", "pokemon"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Painting"]
                ],
                [
                    [b, "c", "painting"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Books"]
                ],
                [
                    [b, "c", "books"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Pets"]
                ],
                [
                    [b, "c", "pets"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Quotes"]
                ],
                [
                    [b, "c", "quotes"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Sports"]
                ],
                [
                    [b, "c", "sports"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cringe"]
                ],
                [
                    [b, "c", "cringe"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Coffee"]
                ],
                [
                    [b, "c", "coffee"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Star_Wars"]
                ],
                [
                    [b, "c", "star_wars"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Fitness"]
                ],
                [
                    [b, "c", "fitness"]
                ]
            ],
            [a, null, [
                    [c, "Tags.History"]
                ],
                [
                    [b, "c", "history"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Fantasy"]
                ],
                [
                    [b, "c", "fantasy"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Love"]
                ],
                [
                    [b, "c", "love"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Nostalgia"]
                ],
                [
                    [b, "c", "nostalgia"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Art"]
                ],
                [
                    [b, "c", "art"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Tattoo"]
                ],
                [
                    [b, "c", "tattoo"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Marvel"]
                ],
                [
                    [b, "c", "marvel"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Fail"]
                ],
                [
                    [b, "c", "fail"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Motivation"]
                ],
                [
                    [b, "c", "motivation"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Space"]
                ],
                [
                    [b, "c", "space"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Music"]
                ],
                [
                    [b, "c", "music"]
                ]
            ],
            [a,
                null, [
                    [c, "Tags.Travel"]
                ],
                [
                    [b, "c", "travel"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Anime"]
                ],
                [
                    [b, "c", "anime"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Unmuted"]
                ],
                [
                    [b, "c", "unmuted"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cat"]
                ],
                [
                    [b, "c", "cat"]
                ]
            ],
            [a, null, [
                    [c, "Tags.WTF"]
                ],
                [
                    [b, "c", "wtf"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Cosplay"]
                ],
                [
                    [b, "c", "cosplay"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Staff Picks"]
                ],
                [
                    [b, "c", "staff_picks"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Dog"]
                ],
                [
                    [b, "c", "dog"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Nature"]
                ],
                [
                    [b, "c", "nature"]
                ]
            ],
            [a, null, [
                    [c, "Tags.DIY"]
                ],
                [
                    [b, "c", "diy"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Memes"]
                ],
                [
                    [b, "c", "memes"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Comics"]
                ],
                [
                    [b, "c", "comics"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Uplifting"]
                ],
                [
                    [b, "c", "uplifting"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Movies and TV"]
                ],
                [
                    [b, "c", "movies_and_tv"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Reaction"]
                ],
                [
                    [b, "c", "reaction"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Funny"]
                ],
                [
                    [b, "c", "funny"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Current Events"]
                ],
                [
                    [b, "c", "current_events"]
                ]
            ],
            [a, null, [
                    [c, "Tags.A Day in the Life"]
                ],
                [
                    [b, "c", "a_day_in_the_life"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Storytime"]
                ],
                [
                    [b, "c", "storytime"]
                ]
            ],
            [a, null, [
                    [c, "Tags.The Great Outdoors"]
                ],
                [
                    [b, "c", "the_great_outdoors"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Awesome"]
                ],
                [
                    [b, "c", "awesome"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Creativity"]
                ],
                [
                    [b, "c", "creativity"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Eat What You Want"]
                ],
                [
                    [b, "c", "eat_what_you_want"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Science and Tech"]
                ],
                [
                    [b, "c", "science_and_tech"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Inspiring"]
                ],
                [
                    [b, "c", "inspiring"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Aww"]
                ],
                [
                    [b, "c", "aww"]
                ]
            ],
            [a, null, [
                    [c, "Tags.The More You Know"]
                ],
                [
                    [b, "c", "the_more_you_know"]
                ]
            ],
            [a, null, [
                    [c, "Tags.Gaming"]
                ],
                [
                    [b, "c", "gaming"]
                ]
            ],
            [a, null, [
                    [c, "PromotedPost.SamuraiJack.Jack to the Future"]
                ],
                [
                    [b, "c", "PppcH"]
                ]
            ],
            [a, null, [
                    [c, "PromotedPost.SamuraiJack.He Asked We Answered"]
                ],
                [
                    [b, "c", "o4FbS"]
                ]
            ],
            [a, null, [
                    [c, "PromotedPost.NierAutomata.Androids Guide To Dealing With Feelings"]
                ],
                [
                    [b, "c", "tmAqe"]
                ]
            ],
            [a, null, [
                    [c, "PromotedPost.SamuraiJack.Return of the Jack"]
                ],
                [
                    [b, "c", "d0K83"]
                ]
            ],
            [a, null, [
                    [c, "PromotedPost.Netflix.Bill Nye Saves the World"]
                ],
                [
                    [b, "c", "miFfK"]
                ]
            ]
        ];
    __qc.apply(null, b);
    (function(b) {
        var c = function() {
                return f.top === f.self ? e.location.href : g(e.referrer).href
            },
            h = c();
        setInterval(function() {
            var d =
                c();
            d !== h && (h = d, __qc.apply(null, b), __qc("push", {
                qacct: a,
                event: "load"
            }, !0))
        }, 2E3)
    })(b)
})("p-f8oruOqDFlMeI", window, document);