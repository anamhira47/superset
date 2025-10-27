import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import TerminalComponent from "@/components/Terminal";
import "./App.css";

function App() {
	const [activeTabId, setActiveTabId] = useState("1");
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);

	return (
		<div className="w-screen h-screen overflow-hidden flex dark">
			{isSidebarOpen && (
				<Sidebar
					onTabSelect={setActiveTabId}
					activeTabId={activeTabId}
					onCollapse={() => setIsSidebarOpen(false)}
				/>
			)}
			<div className="flex-1 flex flex-col">
				<TopBar
					isSidebarOpen={isSidebarOpen}
					onOpenSidebar={() => setIsSidebarOpen(true)}
				/>
				<div className="flex-1">
					<TerminalComponent />
				</div>
			</div>
		</div>
	);
}

export default App;
