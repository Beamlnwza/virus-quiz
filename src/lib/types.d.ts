export type card_data = {
	hint: string;
};

export type quizset = {
	index: number;
	virus_name: string;
	questions: card_data[];
};

export type quizset_list = quizset[];
