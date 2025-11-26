import Greeting from "../ui/Greeting";
import Card from "../ui/Card";
import Counter from "../demos/Counter";
import InputPractise from "../demos/InputPractise";
import Skills from "../components/List";
import AddSkill from "../demos/AddSkill";
import UserCard from "../demos/UserCard";
import FilteredList from "../demos/FilteredList";
import BatchDemo from "../demos/BatchDemo";
import SignUpForm from "../auth/SignUpForm";
import RenderDemo from "../demos/RenderDemo";
import ReRenderOptimizer from "../demos/ReRenderOptimizer";
import CarFilter from "../features/car-filter/CarFilter";
import PriceFilter from "../features/price-filter/PriceFilter";

export default function Home() {
  return (
    <>
      {/* <Greeting name="Marek" />
      <Greeting name="Alex" />
      <Greeting name="Jonas" />

      <Card title="Today's Goal" description="Learn React for 4 hours." />
      <Card title="Streak" description="2 days strong" />

      <p>Current year: {new Date().getFullYear()}</p>

      <Counter />

      <InputPractise />

      <Skills
        title="Frontend developer skills"
        items={["HTML", "CSS", "JavaScript", "React"]}
      />

      <AddSkill />

      <UserCard />

      <FilteredList />

      <BatchDemo />

      <SignUpForm /> */}
      {/* <RenderDemo /> */}
      {/* <ReRenderOptimizer /> */}
      {/* <CarFilter /> */}
      {/* <PriceFilter />

      <Card>
        <h2>Hello Marek 👋</h2>
        <p>This is a reusable card component.</p>
      </Card>
      <Card>
        <h3>Another Card</h3>
        <button>Click me</button>
      </Card>
      <Card>
        <p>This one contains:</p>
        <ul>
          <li>List</li>
          <li>Of</li>
          <li>Items</li>
        </ul>
      </Card> */}
    </>
  );
}
