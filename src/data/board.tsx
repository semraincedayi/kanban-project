import { v4 as uuidv4 } from "uuid";
import taskImage from "../assets/images/task.jpg";
import taskImage2 from "../assets/images/task2.jpg";
import taskImage3 from "../assets/images/task3.jpg";
import type { Columns } from "../types";
import { getRandomColors } from "../helpers/getRandomColors";

export const Board: Columns = {
	backlog: {
		name: "Backlog",
		items: [
			{
				id: uuidv4(),
				title: "TravelTrip projesi",
				description: "proje veritabanı hakkında çalışma",
				priority: "medium",
				deadline: 50,
				image: taskImage2,
				alt: "task image",
				tags: [
					{ title: "Proje", ...getRandomColors() },
					{ title: "çalışma", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "yeni proje fikri üzerinde pazar araştırması",
				description: "son tarih 2/06/2025",
				priority: "low",
				deadline: 50,
				tags: [
					{ title: "YeniProje", ...getRandomColors() },
					{ title: "Fikir", ...getRandomColors() },
				],
			},
		],
	},
	pending: {
		name: "Pending",
		items: [
			{
				id: uuidv4(),
				title: "Kanban Projesi",
				description: "tarih yok",
				priority: "high",
				deadline: 50,
				tags: [
					{ title: "Proje", ...getRandomColors() },
					{ title: "Tamamlandı", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Task ödevleri",
				description: "son tarih 8/06/2024",
				priority: "High",
				deadline: 50,
				image: taskImage,
				alt: "task image",
				tags: [
					{ title: "ToDo", ...getRandomColors() },
					{ title: "Önemli", ...getRandomColors() },
				],
			},
		],
	},
	todo: {
		name: "To Do",
		items: [
			{
				id: uuidv4(),
				title: "bugün to do listem",
				description: "react calis ",
				priority: "medium",
				deadline: 50,
				image: taskImage3,
				alt: "task image",
				tags: [
					{ title: "ToDo", ...getRandomColors() },
					{ title: "React", ...getRandomColors() },
				],
			},
		],
	},
	doing: {
		name: "Doing",
		items: [
			{
				id: uuidv4(),
				title: "İngilizce(YDS) çalışması",
				description: "son tarih 26/5/2025",
				priority: "high",
				deadline: 50,
				tags: [
					{ title: "Language", ...getRandomColors() },
					{ title: "Learn", ...getRandomColors() },
				],
			},
			{
				id: uuidv4(),
				title: "Front-end çalışması",
				description: "eksikler halledilecek",
				priority: "medium",
				deadline: 50,
				tags: [
					{ title: "experience", ...getRandomColors() },
					{ title: "Front", ...getRandomColors() },
				],
			},
		],
	},
	done: {
		name: "Done",
		items: [
			{
				id: uuidv4(),
				title: "yapıldı",
				description: "weather app",
				priority: "high",
				deadline: 50,
				image: taskImage,
				alt: "task image",
				tags: [
					{ title: "Proje", ...getRandomColors() },
					{ title: "Done", ...getRandomColors() },
				],
			},
		],
	},
};