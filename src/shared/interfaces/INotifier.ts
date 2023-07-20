export interface INotifier {
	success: (message: string) => void;
	warning: (message: string) => void;
	error: (message: string) => void;
}
