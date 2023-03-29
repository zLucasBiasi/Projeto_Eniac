import { HomeTemplate } from "@/templates/Home";

export default function Home() {
  return (
    <>
      {/* {CommonQuestions.map((item) => (
        <FAQ
          key={item.id}
          id={item.id}
          title={item.question}
          response={item.response}
        />
      ))} */}
      <HomeTemplate />
    </>
  );
}
