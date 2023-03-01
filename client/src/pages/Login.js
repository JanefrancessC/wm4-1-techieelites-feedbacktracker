import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
	IconButton,
	InputAdornment,
	Stack,
	Typography,
	Container,
	Alert,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RedButton from "../components/RedButton";

const Login = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		showPassword: false,
	});

	const [errors, setErrors] = useState({
		email: false,
		password: false,
	});

	//check form validity
	const [formIsValid, setFormIsValid] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormIsValid("Loading...");
	};

	const handlePasswordVisibility = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const isEmailValid = (email) => {
		/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(errors.email);
	};

	const handleEmailBlur = () => {
		if (!isEmailValid(values.email)) {
			setErrors({ ...errors, email: !errors.email });
			return;
		}
		setErrors({ ...errors, email: false });
	};

	const handlePasswordBlur = () => {
		if (
			!values.password ||
			values.password.length < 6 ||
			values.password.length > 20
		) {
			setErrors({ ...errors, password: !errors.password });
			return;
		}
		setErrors({ ...errors, password: false });
	};

	return (
		<Container
			maxWidth="xxl"
			sx={{
				height: "90vh",
				position: "relative",

				"&::before": {
					zIndex: -1,
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					filter: {
						xs: "grayscale(80%) blur(1px) opacity(0.3)",
						md: "grayscale(60%) blur(2px) opacity(0.5)",
					},
					backgroundImage:
						"url(https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
					backgroundSize: "cover",
				},
			}}
		>
			<Container
				sx={{
					marginInline: "auto",
					maxWidth: "72rem",
				}}
			>
				<Stack
					sx={{
						display: "flex",
						justifyContent: "center",
						maxWidth: 360,
						height: "90vh",
						padding: "1rem",
						margin: { xs: "1rem auto", md: "1rem 1rem 1rem auto" },
					}}
					spacing={5}
				>
					<Stack spacing={1}>
						<Typography variant="h4" sx={{ fontSize: { xs: 24, md: 32 } }}>
							Hi, Welcome back! 👋
						</Typography>
						<Typography variant="h6" sx={{ fontSize: { xs: 16, md: 22 } }}>
							Hello again, you have been missed
						</Typography>
					</Stack>
					<form onSubmit={handleSubmit}>
						<Stack spacing={2}>
							<TextField
								variant="outlined"
								label="Email"
								type="email"
								fullWidth
								id="email"
								name="email"
								placeholder="example@gmail.com"
								value={values.email}
								error={errors.email}
								onBlur={handleEmailBlur}
								required
								helperText={errors.email ? "Please enter a valid email" : ""}
								onChange={(e) =>
									setValues({ ...values, email: e.target.value })
								}
							></TextField>

							<TextField
								variant="outlined"
								label="Password"
								type={values.showPassword ? "text" : "password"}
								fullWidth
								id="password"
								name="password"
								placeholder="********"
								value={values.password}
								error={errors.password}
								required
								helperText={
									errors.password ? "Please enter a valid password" : ""
								}
								onBlur={handlePasswordBlur}
								onChange={(e) =>
									setValues({ ...values, password: e.target.value })
								}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												onClick={handlePasswordVisibility}
												aria-label="toggle password"
												edge="end"
											>
												{values.showPassword ? (
													<VisibilityOffIcon />
												) : (
													<VisibilityIcon />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							></TextField>

							<RedButton type="submit" fullWidth>
								Login
							</RedButton>
							<span>
								{formIsValid && <Alert severity="success">{formIsValid}</Alert>}
							</span>
						</Stack>
					</form>
				</Stack>
			</Container>
		</Container>
	);
};

export default Login;
