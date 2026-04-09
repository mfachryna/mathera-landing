<script lang="ts">
	import { toast } from 'svelte-french-toast';
	import AnimateOnScroll from '$lib/components/animate-on-scroll.svelte';
	import PageTitle from '../page-title.svelte';

	let form = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		level: '',
		schedule: '',
		message: ''
	});
	let submitting = $state(false);
	let submitted = $state(false);

	const subjects = [
		'Foundation Algebra',
		'Calculus',
		'Geometry & Proofs',
		'Statistics & Probability',
		'SAT / ACT Math Prep',
		'Linear Algebra',
		'Other'
	];

	const levels = [
		'Middle School (Grade 7–9)',
		'High School (Grade 10–12)',
		'Pre-University / A-Level / IB',
		'University / College',
		'Adult Learner'
	];

	const schedules = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–9pm)', 'Flexible'];

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!form.name || !form.email || !form.subject || !form.level) {
			toast.error('Please fill in all required fields.');
			return;
		}
		submitting = true;
		await new Promise((r) => setTimeout(r, 1200));
		submitting = false;
		submitted = true;
		toast.success('🎉 Registration received! Mathera will reach out within 24 hours.');
		form = { name: '', email: '', phone: '', subject: '', level: '', schedule: '', message: '' };
	}
</script>

<section class="section-padding relative" id="register" aria-labelledby="register-title">
	<div
		class="absolute inset-0 opacity-40"
		style="background: linear-gradient(180deg, transparent, oklch(from var(--primary) l c h / 0.04) 50%, transparent);"
	></div>

	<div class="container-modern relative z-10">
		<PageTitle
			title="Start Learning Today"
			brief="Let's begin"
			description="Fill in the form below and Mathera will get back to you within 24 hours to schedule your first session"
		/>

		<div class="mx-auto max-w-3xl relative">
			<!-- Vibrant glassmorphism refraction blobs behind the form -->
			<div class="absolute -left-12 sm:-left-32 -top-12 sm:-top-24 -z-10 h-64 w-64 md:h-[26rem] md:w-[26rem] rounded-full bg-primary/20 blur-[60px] md:blur-[100px]"></div>
			<div class="absolute -right-12 sm:-right-32 -bottom-12 sm:-bottom-24 -z-10 h-64 w-64 md:h-[26rem] md:w-[26rem] rounded-full bg-accent/20 blur-[60px] md:blur-[100px]"></div>

			<AnimateOnScroll animation="fade" delay={200} threshold={0.1}>
				{#if submitted}
					<div
						class="card-modern flex flex-col items-center justify-center py-20 text-center"
					>
						<div
							class="mb-6 flex h-20 w-20 items-center justify-center rounded-full text-4xl"
							style="background: var(--gradient-primary);"
						>
							✓
						</div>
						<h3 class="mb-3 text-2xl font-bold">
							You're registered!
						</h3>
						<p class="text-muted-foreground max-w-md">
							Thank you! Your registration has been received.<br />
							Mathera will reach out within 24 hours to confirm your first session.
							Get ready to unlock your mathematical potential!
						</p>
						<button
							class="btn-outline mt-8"
							onclick={() => (submitted = false)}
						>
							Register Another Student
						</button>
					</div>
				{:else}
					<form
						onsubmit={handleSubmit}
						class="card-modern space-y-6"
						id="registration-form"
					>
						<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label for="reg-name" class="mb-1.5 block text-sm font-medium">
									Full Name <span style="color: var(--accent);">*</span>
								</label>
								<input
									id="reg-name"
									type="text"
									bind:value={form.name}
									class="input-modern"
									placeholder="Your name"
									required
								/>
							</div>
							<div>
								<label for="reg-email" class="mb-1.5 block text-sm font-medium">
									Email Address <span style="color: var(--accent);">*</span>
								</label>
								<input
									id="reg-email"
									type="email"
									bind:value={form.email}
									class="input-modern"
									placeholder="you@example.com"
									required
								/>
							</div>
						</div>

						<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label for="reg-phone" class="mb-1.5 block text-sm font-medium text-muted-foreground">
									Phone (optional)
								</label>
								<input
									id="reg-phone"
									type="tel"
									bind:value={form.phone}
									class="input-modern"
									placeholder="+62 xxx xxxx xxxx"
								/>
							</div>
							<div>
								<label for="reg-subject" class="mb-1.5 block text-sm font-medium">
									Subject <span style="color: var(--accent);">*</span>
								</label>
								<select
									id="reg-subject"
									bind:value={form.subject}
									class="input-modern"
									required
								>
									<option value="" disabled>Select a subject</option>
									{#each subjects as s}
										<option value={s}>{s}</option>
									{/each}
								</select>
							</div>
						</div>

						<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div>
								<label for="reg-level" class="mb-1.5 block text-sm font-medium">
									Your Level <span style="color: var(--accent);">*</span>
								</label>
								<select
									id="reg-level"
									bind:value={form.level}
									class="input-modern"
									required
								>
									<option value="" disabled>Select your level</option>
									{#each levels as l}
										<option value={l}>{l}</option>
									{/each}
								</select>
							</div>
							<div>
								<label for="reg-schedule" class="mb-1.5 block text-sm font-medium text-muted-foreground">
									Preferred Schedule
								</label>
								<select
									id="reg-schedule"
									bind:value={form.schedule}
									class="input-modern"
								>
									<option value="" disabled>Select a time</option>
									{#each schedules as s}
										<option value={s}>{s}</option>
									{/each}
								</select>
							</div>
						</div>

						<div>
							<label for="reg-message" class="mb-1.5 block text-sm font-medium text-muted-foreground">
								Tell me about your goals (optional)
							</label>
							<textarea
								id="reg-message"
								bind:value={form.message}
								class="input-modern min-h-28 resize-y"
								placeholder="What would you like to achieve? Any specific struggles or upcoming exams?"
							></textarea>
						</div>

						<div class="flex items-center justify-between gap-4 pt-2">
							<p class="text-muted-foreground text-xs">
								<span style="color: var(--accent);">*</span> Required fields
							</p>
							<button
								type="submit"
								class="btn-modern flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
								disabled={submitting}
							>
								{#if submitting}
									<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
										<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
										<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
									</svg>
									<span>Submitting...</span>
								{:else}
									<span>Let's Begin</span>
								{/if}
							</button>
						</div>
					</form>
				{/if}
			</AnimateOnScroll>
		</div>
	</div>
</section>
