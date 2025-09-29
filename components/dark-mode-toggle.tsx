import { Button } from '@/components/ui/button';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkModeToggle() {

    const { setTheme } = useTheme();

    const toggleTheme = () => {
        console.log("Testing works?")
        setTheme((prev: String) => {
            console.log(prev);
            if (prev === "dark") {
                return "light";
            }
            return "dark";
        });
    }

    return (
        <Button onClick={toggleTheme} className="p-0 bg-red-600 w-[60px] h-[30px] relative rounded-xl">
            <Sun className="scale-100 dark:scale-0 rotate-0 transition-all absolute bg-black dark:left[100%] left-0 top-0 bottom-0 rounded-xl !h-[30px] !w-[30px] p-1 !duration-500" color="white"/>
            <Moon className="scale-0 dark:scale-100 rotate-0 transition-all absolute bg-black dark:right-0 right-[100%] top-0 bottom-0 rounded-xl !h-[30px] !w-[30px] p-1 !duration-500" color="white" />
        </Button>
    )
}