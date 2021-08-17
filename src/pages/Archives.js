import Card from "../components/ui/Card";
import classes from "./Customisations.module.css";

function ArchivesPage() {
  return (
    <section>
      <div
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/image 10.jpeg')`,
          width: "100%",
          height: "75vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "5px",
        }}
      >
        <h1>Archives Page</h1>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Protecting Meadows</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 1.jpeg"}
              alt="pheasant in a meadow"
            />
          </div>
          <div className={classes.content}>
            <p>
              A team of volunteers placed sign posts around various meadows to
              discourage walkers from trampling on long grass. This has resulted
              in the successful breeding of ground nesting birds and has also
              increased the population of pheasants.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Protecting Lakes and Ponds</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 2.jpeg"}
              alt="great crested grebe on a lake"
            />
          </div>
          <div className={classes.content}>
            <p>
              A team of volunteers placed secure animal friendly fencing around
              the lakes to prevent plastics and man-made materials from entering
              the lakes and ponds around Bentley Priory.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Improving Plant Biodiversity</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 3.jpg"}
              alt="bumble bee on lavendar"
            />
          </div>
          <div className={classes.content}>
            <p>
              When meadows are left to flourish, an excellent byproduct of that
              is the increased abundance and variety of pollinators. Planting
              interventions are rare, but volunteers do occasionally get
              involved in introducing plant species with the intention of
              improving biodiversity.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Monitoring Biodiversity</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 4.jpg"}
              alt="peacock butterfly on wild pink flowers"
            />
          </div>
          <div className={classes.content}>
            <p>
              Volunteers have been involved in recording the range of
              pollinators found at Bentley Priory Nature Reserve. This is very
              important work in determining the health of the site.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Litter Removal and Disposal</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 5.jpeg"}
              alt="autumn scene"
            />
          </div>
          <div className={classes.content}>
            <p>
              Volunteers are regularly involved in removing litter. There is a
              group that meets every Saturday morning from 10am at Old Lodge
              Meadow, so please join them if you would like to get involved.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Coppicing</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 6.jpeg"}
              alt="trees in a wood"
            />
          </div>
          <div className={classes.content}>
            <p>
              Volunteers have been involved in coppicing in order to help in the
              stronger re-growth of birch and ash trees in the woods.
              Treecreepers have benefitted from these interventions.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Welfare of Livestock</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 7.jpeg"}
              alt="cows in a field"
            />
          </div>
          <div className={classes.content}>
            <p>
              Volunteers are encouraged to report on but NOT inspect the health
              of grazing livestock. Herbivores that are given access to the
              reserve are vital for the management of Bentley Priory.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Path Maintenance</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 8.jpeg"}
              alt="path lined with trees and tall grass"
            />
          </div>
          <div className={classes.content}>
            <p>
              Volunteers are encouraged to safely pick up litter dropped by
              visitors and put them in the bins found near all the entrances
              located around Bentley Priory.
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.item}>
        <Card>
          <div className={classes.content}>
            <h2>Reporting on Illegal Fishing at Boot Pond</h2>
          </div>
          <div className={classes.image}>
            <img
              src={process.env.PUBLIC_URL + "/images/image 9.jpeg"}
              alt="pond in a park"
            />
          </div>
          <div className={classes.content}>
            <p>
              Volunteers are encouraged to report on but NOT directly challenge
              anyone caught fishing at Boot Pond. If any fishing wire has been
              left in the pond itself, you are not to enter the water as it is
              very deep and there is the real risk of drowning.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default ArchivesPage;
