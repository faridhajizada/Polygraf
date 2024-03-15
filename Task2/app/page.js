import { getData } from "./api/getData";
import PostComponent from "./Post/page";

export default async function Home() {
  let data = await getData("1");
  console.log("🚀 ~ Home ~ data:");
  return (
    <div>
      <h2>TASK #2</h2>
      <PostComponent data={data} action={getData} />
    </div>
  );
}
