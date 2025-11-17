"use client";
import Table from "@/components/Table";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Users as UsersIcon } from "lucide-react";

const columns = [
	{ key: "nickname", label: "Usuario" },
	{ key: "birthdate", label: "Fecha de Nacimiento" },
	{ key: "gender", label: "Género" },
];

export default function UsersPage() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGender, setSelectedGender] = useState("");
	const router = useRouter();

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://ms-app-pave.onrender.com/api/Users');
				if (!response.ok) {
					throw new Error('Error al cargar los usuarios');
				}
				const data = await response.json();
				
				const transformedData = data.map(user => ({
					id: user.id,
					nickname: user.nickname,
					birthdate: new Date(user.birthdate).toLocaleDateString(),
					gender: user.gender?.name || 'No especificado'
				}));
				
				setUsers(transformedData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const filteredUsers = useMemo(() => {
		return users.filter(user => {
			const matchesSearch = user.nickname.toLowerCase().includes(searchTerm.toLowerCase());
			const matchesGender = selectedGender === "" || user.gender.toLowerCase() === selectedGender.toLowerCase();
			return matchesSearch && matchesGender;
		});
	}, [users, searchTerm, selectedGender]);

	const genderOptions = useMemo(() => {
		const uniqueGenders = [...new Set(users.map(user => user.gender))];
		return uniqueGenders.filter(Boolean);
	}, [users]);

	if (error) {
		return (
			<div className="container max-w-4xl mx-auto py-12 px-4">
				<Card className="border-destructive">
					<CardContent className="pt-6">
						<p className="text-destructive text-center">Error: {error}</p>
					</CardContent>
				</Card>
			</div>
		);
	}

	return (
		<div className="container mx-auto py-8 px-4 max-w-7xl">
			<Card className="border-0 shadow-sm">
				<CardHeader>
					<div className="flex items-center gap-2">
						<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/5">
							<UsersIcon className="h-5 w-5 text-primary" />
						</div>
						<div>
							<CardTitle className="text-2xl font-semibold">Usuarios</CardTitle>
							<CardDescription>
								Gestiona y visualiza todos los usuarios del sistema
							</CardDescription>
						</div>
					</div>
				</CardHeader>
				<CardContent className="space-y-6">
					{/* Filtros */}
					<div className="flex flex-col sm:flex-row gap-4">
						<div className="flex-1 space-y-2">
							<Label htmlFor="search" className="text-sm text-muted-foreground">
								Buscar usuario
							</Label>
							<div className="relative">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="search"
									type="text"
									placeholder="Buscar por nickname..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10"
								/>
							</div>
						</div>
						<div className="sm:w-48 space-y-2">
							<Label htmlFor="gender" className="text-sm text-muted-foreground">
								Filtrar por género
							</Label>
							<select
								id="gender"
								className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
								value={selectedGender}
								onChange={(e) => setSelectedGender(e.target.value)}
							>
								<option value="">Todos los géneros</option>
								{genderOptions.map((gender) => (
									<option key={gender} value={gender}>
										{gender}
									</option>
								))}
							</select>
						</div>
					</div>

					{loading ? (
						<div className="text-center py-12">
							<div className="inline-flex items-center gap-2 text-muted-foreground">
								<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
								Cargando usuarios...
							</div>
						</div>
					) : (
						<>
							<div className="flex items-center justify-between">
								<Badge variant="secondary" className="text-xs">
									{filteredUsers.length} {filteredUsers.length === 1 ? 'usuario' : 'usuarios'}
								</Badge>
							</div>
							<Table
								columns={columns}
								data={filteredUsers}
								renderActions={(user) => (
									<Button
										variant="ghost"
										size="sm"
										onClick={() => router.push(`/users/${user.id}`)}
									>
										Ver detalle
									</Button>
								)}
							/>
						</>
					)}
				</CardContent>
			</Card>
		</div>
	);
}

