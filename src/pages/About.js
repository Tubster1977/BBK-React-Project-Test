import Card from "../components/ui/Card";
import classes from "./Customisations.module.css";

function AboutPage() {
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
        <h1>About Page</h1>
      </div>
      <Card>
        <h2>About Us</h2>
        <h3>Who are we and what exactly do we do?</h3>
        <p>
          BPCT is made up of a team of dedicated volunteers that work together
          in ensuring that the habitats that make up Bentley Priory are
          protected. The hope is that biodiversity will increase during a time
          where we are experiencing a climate emergency.
        </p>
        <h3>What are we looking for?</h3>
        <p>
          We are looking for more volunteers to take on the overall stewardship
          of the nature reserve. Be it through helping with ongoing tasks or in
          simply having a presence, you can become both an active AND effective
          member of the wider team.
        </p>
        <h3>What is an active member?</h3>
        <p>
          An active member can be someone that gets involved in ongoing tasks
          such as litter collection and disposal in a safe and responsible
          manner without passing the problem on to the wider community. An
          active member can also be someone that regularly checks the site for
          tasks that need to be completed and helps in whatever way they can.
        </p>
        <h3>What is an effective member?</h3>
        <p>
          An effective member is someone that works well with BPCT conservation
          officers and the wider community in resolving issues. An effective
          member is also someone that can communicate effectively to others and
          demonstrate leadership values.
        </p>
        <h3>Other important qualities of BPCT</h3>
        <p>
          BPCT practices inclusiveness and respect. We believe that in working
          together harmoniously, Bentley Priory can be a place where everyone,
          regardless of race, gender and sexuality can collectively thrive in.
          We all have one thing in common - the effective stewardship of Bentley
          Priory for the protection of habitats and wildlife.
        </p>
      </Card>
      <Card>
        <h2>Finding Your Way About</h2>
        <div className={classes.image}>
          <img
            src={process.env.PUBLIC_URL + "/images/image 11.jpeg"}
            alt="map of Bentley Priory"
          />
        </div>
      </Card>
    </section>
  );
}

export default AboutPage;
