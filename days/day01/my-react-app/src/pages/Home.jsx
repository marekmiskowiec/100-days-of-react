import Greeting from "../components/Greeting";
import Card from "../components/Card";
import Counter from "../components/Counter";
import InputPractise from "../components/InputPractise";
import Skills from "../components/List";
import AddSkill from "../components/AddSkill";
import UserCard from "../components/UserCard";
import FilteredList from "../components/FilteredList";
import StudyPlanner from "../components/StudyPlanner";

export default function Home() {
  return (
    <>
      <Greeting name="Marek" />
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

      <StudyPlanner />
    </>
  );
}
