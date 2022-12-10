const Express = require("express");
const BodyParser = require("body-parser");
const boolParser = require('express-query-boolean');
const intParser = require('express-query-int');
const rateLimit = require('express-rate-limit');
//const helmet = require('helmet');
//const morgan = require('morgan');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = "mongodb+srv://huntUser:Butterfly456!@huntshowdownapi.ighyd.mongodb.net/test";
const DATABASE_NAME = "hunt";

const limiter = rateLimit({
    //windowMs: 1 * 60 * 1000, // 1 minute
    //max: 2, // limit each IP to 2 requests per windowMs
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    handler: function (req, res, /*next*/) {
        return res.status(429).json([{
            error: 'You sent too many requests. Please wait a while then try again',
            information: 'This API has a Rate-Limit. Each IP can request up to 100 requests per window of 15 minutes.'
        }])
    }
})

var app = Express();
app.use(BodyParser.json());
app.use(boolParser());
app.use(intParser());
app.use(BodyParser.urlencoded({ extended: true }));
//app.use(helmet());
//app.use(morgan('combined'));
//app.use(limiter)
var database, collection;

app.listen(process.env.PORT || 5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);

        // Liste des Databases
        collection_traits = database.collection("traits");
        collection_trait_info = database.collection("trait_info");
        collection_traitinfo = database.collection("traitinfo");

        collection_ammo = database.collection("ammo");

        collection_weapons = database.collection("weapons");
        collection_weapon_info = database.collection("weapon_info");
        collection_weaponinfo = database.collection("weaponinfo");

        collection_legendary_skin = database.collection("legendary_skin");

        version = database.collection("version");

        collection_tools = database.collection("tools");
        collection_toolinfo = database.collection("toolinfo");

        collection_consumables = database.collection("consumables");
        collection_consumableinfo = database.collection("consumableinfo");

        collection_damagetype = database.collection("damagetype");

        collection_hunters = database.collection("hunters");
        collection_hunterinfo = database.collection("hunterinfo");

        collection_dlc = database.collection("dlc");

        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

// START WEBSITE REQUIREMENTS
app.get("/", (req, res) => {
    res.sendFile('views/root.html', {root: __dirname });
});

app.get("/how-to-use", (req, res) => {
    res.sendFile('views/how-to-use.html', {root: __dirname });
});

app.get("/endpoints", (req, res) => {
    res.sendFile('views/endpoints.html', {root: __dirname });
});

app.get("/credits", (req, res) => {
    res.sendFile('views/credits.html', {root: __dirname });
});

app.get("/changelogs", (req, res) => {
    res.sendFile('views/changelogs.html', {root: __dirname });
});

app.get("/changelogs_json", (req, res) => {
    res.sendFile('views/changelogs.json', {root: __dirname });
});

app.get("/style.css", (req, res) => {
    res.sendFile('views/style.css', {root: __dirname });
});

app.get("/script.js", (req, res) => {
    res.sendFile('views/script.js', {root: __dirname });
});

app.get("/uwu.mp3", (req, res) => {
    res.sendFile('views/uwu.mp3', {root: __dirname });
});

app.get("/background.jpg", (req, res) => {
    res.sendFile('views/background.jpg', {root: __dirname });
});
// END WEBSITE REQUIREMENTS

// START TRAITS
app.get("/traits", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_traits.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_traits.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END TRAITS

// START TRAIT INFO
app.get("/trait_info", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_trait_info.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_trait_info.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get("/traitinfo", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_traitinfo.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_traitinfo.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END TRAIT INFO

// START AMMO
app.get("/ammo", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_ammo.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_ammo.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get('/ammo/:ammoId', limiter, (req, res) => {
    collection_ammo.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result[0][req.params.ammoId]);
    });
});
// END AMMO

// START WEAPONS
app.get("/weapons", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_weapons.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_weapons.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END WEAPONS

// START WEAPON INFO
app.get("/weapon_info", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_weapon_info.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_weapon_info.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get("/weaponinfo", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_weaponinfo.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_weaponinfo.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END WEAPON INFO

// START LEGENDARY SKIN
app.get("/legendary_skin", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_legendary_skin.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_legendary_skin.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get('/legendary_skin/:legendaryId', limiter, (req, res) => {
    collection_legendary_skin.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result[0][req.params.legendaryId]);
    });
});
// END LEGENDARY SKIN

// START VERSION
app.get("/version", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        version.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        version.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get("/v", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        version.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        version.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END VERSION

// START TOOLS
app.get("/tools", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_tools.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_tools.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END TOOLS

// START TOOL INFO
app.get("/toolinfo", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_toolinfo.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_toolinfo.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END TOOL INFO

// START CONSUMABLES
app.get("/consumables", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_consumables.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_consumables.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END CONSUMABLES

// START CONSUMABLE INFO
app.get("/consumableinfo", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_consumableinfo.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_consumableinfo.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END CONSUMABLE INFO

// START HUNTERS
app.get("/hunters", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_hunters.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_hunters.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END HUNTERS

// START HUNTER INFO
app.get("/hunterinfo", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_hunterinfo.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_hunterinfo.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});
// END HUNTER INFO

// START DAMAGE TYPE
app.get("/damagetype", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_damagetype.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_damagetype.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get('/damagetype/:damageId', limiter, (req, res) => {
    collection_damagetype.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result[0][req.params.damageId]);
    });
});
// END DAMAGE TYPE

// START DLC
app.get("/dlc", limiter, (req, res) => {
    if (Object.keys(req.query).length >= 1) {
        collection_dlc.find( req.query ).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    } else {
        collection_dlc.find({}).toArray((error, result) => {
            if(error) {
                return res.status(500).send(error);
            }
            res.send(result);
        });
    }
});

app.get('/dlc/:dlcId', limiter, (req, res) => {
    collection_dlc.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result[0][req.params.dlcId]);
    });
});
// END DLC