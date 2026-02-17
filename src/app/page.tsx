// <== IMPORTS ==>
import { JSX } from "react";
import CardList from "@/src/components/common/CardList";
import TodoList from "@/src/components/common/TodoList";
import AppBarChart from "@/src/components/chart/AppBarChart";
import AppPieChart from "@/src/components/chart/AppPieChart";
import AppAreaChart from "@/src/components/chart/AppAreaChart";

// <== HOMEPAGE COMPONENT ==>
const HomePage = (): JSX.Element => {
  // RETURNING THE HOMEPAGE CONTENT
  return (
    // MAIN CONTAINER
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* APP BAR CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      {/* CARD LIST */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      {/* APP PIE CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      {/* TODO LIST */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      {/* APP AREA CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      {/* CARD LIST */}
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Products" />
      </div>
    </div>
  );
};

// <== EXPORTING THE HOMEPAGE COMPONENT ==>
export default HomePage;
