// <== IMPORTS ==>
import AppBarChart from "@/components/chart/AppBarChart";

// <== HOMEPAGE COMPONENT ==>
const HomePage = () => {
  // RETURNING THE HOMEPAGE CONTENT
  return (
    // MAIN CONTAINER
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {/* APP BAR CHART */}
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        Test
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
    </div>
  );
};

// <== EXPORTING THE HOMEPAGE COMPONENT ==>
export default HomePage;
