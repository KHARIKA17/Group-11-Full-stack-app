const express = require("express");
const LOG = require("../util/logger");

const locationRoutes = require("./location.routes");

LOG.info("routes/index.js: STARTING custom routes......");
const router = express.Router();

const appTitle = "Group 11-Full stack app";
const appSubTitle = "Gaming app";

/* GET home page. */
router.get("/", (req, res) => {
  return res.render("index.ejs", {
    title: appTitle,
    subTitle: appSubTitle,
  });
});
/* about page. */
router.get("/aboutp", (req, res) => {
  return res.render("aboutp.ejs",{
    title: appTitle,
  } );
});

// /* about page. */
// router.get("/about", (req, res) => {
//   return res.render("about.ejs",{
//     title: appTitle,
//   } );
// });

router.get("/index", (req, res) => {
  return res.redirect("/");
});

try {
  router.use("/location", locationRoutes);
} catch (err) {
  LOG.error(`ERROR: ${err.message}`);
}


LOG.info("routes/index.js: ENDING custom routes......");

module.exports = router;
