import Card from "../components/ui/Card";
import Form from "../components/form/Form";

function ContactPage() {
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
        <h1>Contact Page</h1>
      </div>
      <Card>
        <Form />
      </Card>
    </section>
  );
}

export default ContactPage;
