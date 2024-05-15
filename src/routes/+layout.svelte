<script>
	import '../app.css';
	import Navbar from '$lib/Components/Navbar.svelte';
	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import Footer from '../lib/Components/Footer.svelte';
	import { goto } from '$app/navigation';

	initializeStores();

	const drawerStore = getDrawerStore();

	let clicked = false;
	let click = false;
</script>

<svelte:head>
	<title>Indabo Jaya Mandiri - Penyedia Spare Parts Alat Berat dan Perbaikan</title>
</svelte:head>

<Drawer position="right">
	<button
		on:click={() => drawerStore.close()}
		class="bg-red-500 rounded-full w-8 h-8 text-white font-bold m-4">X</button
	>
	<div class="flex flex-col items-start font-bold text-lg gap-2 text-start m-4">
		<button
			on:click={() => {
				goto('/');
				drawerStore.close();
			}}>Beranda</button
		>
		<button
			on:click={() => {
				goto('/about');
				drawerStore.close();
			}}>Siapa Kami</button
		>
		<button
			on:click={() => (click = !click)}
			class="flex items-center gap-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
			>Produk Kami
			<img class="w-2" src="/arrowDown.png" alt="" />
		</button>
		<div
			class="bg-blue-600 text-white {click ? 'flex' : 'hidden'} rounded-md flex-col absolute top-48"
		>
			<div class="flex flex-col items-start p-2 text-sm gap-1">
				<button
					on:click={() => {
						goto('/product/0');
						click = false;
						drawerStore.close();
					}}>Turbocharger</button
				>
				<button
					on:click={() => {
						goto('/product/2');
						click = false;
						drawerStore.close();
					}}>Hydraulic Pumps</button
				>
				<button
					on:click={() => {
						goto('/product/1');
						click = false;
						drawerStore.close();
					}}>Gearbox & Transmission</button
				>
				<button
					on:click={() => {
						goto('/product/3');
						click = false;
						drawerStore.close();
					}}>Axle & Accesories</button
				>
			</div>
		</div>
	</div></Drawer
>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="/2.png" class="h-8" alt="Flowbite Logo" />
			<span class="self-center md:text-2xl font-bold whitespace-nowrap dark:text-white"
				>PT Indabo Jaya Mandiri</span
			>
		</a>
		<button
			on:click={() => drawerStore.open()}
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
		<div class="hidden md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
			>
				<li>
					<a
						href="/"
						class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:hover:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
						aria-current="page">Beranda</a
					>
				</li>
				<li>
					<a
						href="/about"
						class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Siapa Kami</a
					>
				</li>
				<li>
					<button
						on:click={() => (clicked = !clicked)}
						class="flex items-center gap-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
						>Produk Kami
						<img class="w-2" src="/arrowDown.png" alt="" />
					</button>
					<div
						class="bg-blue-600 text-white {clicked
							? 'flex'
							: 'hidden'} rounded-md flex-col absolute top-12"
					>
						<div class="flex flex-col items-start p-2 text-sm gap-1">
							<button
								on:click={() => {
									goto('/product/0');
									clicked = false;
								}}>Turbocharger</button
							>
							<button
								on:click={() => {
									goto('/product/2');
									clicked = false;
								}}>Hydraulic Pumps</button
							>
							<button
								on:click={() => {
									goto('/product/1');
									clicked = false;
								}}>Gearbox & Transmission</button
							>
							<button
								on:click={() => {
									goto('/product/3');
									clicked = false;
								}}>Axle & Accesories</button
							>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</nav>

<slot />

<Footer />
