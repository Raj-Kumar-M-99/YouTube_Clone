import { useState } from "react";
import { CategoryPills } from "./Components/CategoryPills"
import { categories } from "./Data/home"
import { PageHeader } from "./Layouts/PageHeader"
import { VideoGridItem } from "./Components/VideoGridItem";
import { videos } from "./Data/Constants";
import { SideBar } from "./Components/SideBar";
import { SidebarProvider } from "./Context/SidebarContext";

function App() {
  const [selectedCategory,setSelectedCategory] = useState(categories[0]);
  return ( 
    <SidebarProvider>
    <div className="max-h-screen flex flex-col">
     <PageHeader/>
     <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
       <SideBar/>
       <div className="overflow-x-hidden px-8 pb-4">
       <div className="sticky top-0 bg-white z-10 pb-4">
        <CategoryPills 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
        />
       </div>
       <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {videos.map((video:any) =>(
        <VideoGridItem key={video.id} {...video}/>
        ))}
       </div>
       </div>
     </div>
    </div>
    </SidebarProvider>
  )
} 
export default App
