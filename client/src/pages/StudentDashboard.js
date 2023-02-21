import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import WelcomeMsg from "../components/WelcomeMsg";
import Profile from "../components/Profile";
import FeedbackModal from "../components/FeedbackModal";

const StudentDashboard = ({ theme }) => (
	<ThemeProvider theme={theme}>
		<Stack sx={{ maxWidth: "380px", padding: "1rem", margin: "auto" }}>
			<WelcomeMsg message="Welcome student name!👋" />
			<Profile />
			<FeedbackModal />
		</Stack>
	</ThemeProvider>
);

export default StudentDashboard;
