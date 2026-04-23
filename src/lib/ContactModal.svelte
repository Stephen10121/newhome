<script lang="ts">
    import { contactDialogOpen, turnstileWidgetId } from "$lib/store";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { contactForm } from "../routes/contact.remote";
	import { toast } from "svelte-sonner";

    let { turnstileSiteToken }: { turnstileSiteToken: string } = $props();
</script>


<Dialog.Root bind:open={$contactDialogOpen}>
	<Dialog.Content class="bg-[#0b141e]">
		<Dialog.Header>
			<Dialog.Title>Initialize Connection</Dialog.Title>
			<Dialog.Description class="text-[#5df7dc] font-mono">--- Contact Protocol ---</Dialog.Description>
		</Dialog.Header>
        <form class="space-y-6" {...contactForm.enhance(async ({ submit, form }) => {
            let savingChanges = toast.loading("Saving Changes.", { duration: Number.POSITIVE_INFINITY });
            try {
                await submit();
                form.reset();
                toast.dismiss(savingChanges);

                //@ts-ignore
                turnstile.reset($turnstileWidgetId);

                if (!contactForm.fields.allIssues()) {
                    toast.success("Thank you for your message.", { description: "We will contact you soon!" });
                    contactDialogOpen.set(false);
                }
            } catch (err) {
                console.log(err);
                toast.dismiss(savingChanges);
                toast.error("Failed to send message.", { description: "Please try again later." });
            }
        })}>
            <div>
                {#each contactForm.fields.turnStileToken.issues() as issue}
                    <p class="text-red-500 text-sm">{issue.message}</p>
                {/each}
            </div>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- Name Field -->
                <div class="space-y-2">
                    <label for="name" class="font-label text-[10px] text-[#bacac4] tracking-widest uppercase text-on-surface-variant font-bold ml-1">Name</label>
                    <div class="relative group">
                        <input
                            id="name"
                            class="w-full bg-secondary/50 border-none text-on-surface placeholder:text-surface-variant focus:ring-1 focus:ring-primary/50 py-4 px-5 rounded-lg transition-all duration-300 font-label tracking-wider text-sm"
                            placeholder="IDENTITY"
                            type="text"
                            {...contactForm.fields.name.as("text")}
                            required
                        />
                        {#each contactForm.fields.name.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}
                    </div>
                </div>

                <!-- Email Field -->
                <div class="space-y-2">
                    <label for="email" class="font-label text-[10px] text-[#bacac4] tracking-widest uppercase text-on-surface-variant font-bold ml-1">Email Address</label>
                    <div class="relative group">
                        <input
                            id="email"
                            class="w-full bg-secondary/50 border-none text-on-surface placeholder:text-surface-variant focus:ring-1 focus:ring-primary/50 py-4 px-5 rounded-lg transition-all duration-300 font-label tracking-wider text-sm"
                            placeholder="COMM_CHANNEL"
                            {...contactForm.fields.email.as("email")}
                            required
                        />
                        {#each contactForm.fields.email.issues() as issue}
                            <p class="text-red-500 text-sm">{issue.message}</p>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Subject Field -->
            <div class="space-y-2">
                <label for="subject" class="font-label text-[10px] text-[#bacac4] tracking-widest uppercase text-on-surface-variant font-bold ml-1">Subject</label>
                <div class="relative group">
                    <input
                        id="subject"
                        class="w-full bg-secondary/50 border-none text-on-surface placeholder:text-surface-variant focus:ring-1 focus:ring-primary/50 py-4 px-5 rounded-lg transition-all duration-300 font-label tracking-wider text-sm"
                        placeholder="ENQUIRY_TYPE"
                        type="text"
                        {...contactForm.fields.subject.as("text")}
                        required
                    />
                    {#each contactForm.fields.subject.issues() as issue}
                        <p class="text-red-500 text-sm">{issue.message}</p>
                    {/each}
                </div>
            </div>

            <!-- Message Field -->
            <div class="space-y-2">
                <label for="message" class="font-label text-[10px] text-[#bacac4] tracking-widest uppercase text-on-surface-variant font-bold ml-1">Message</label>
                <div class="relative group">
                    <textarea
                        id="message"
                        class="w-full bg-secondary/50 border-none text-on-surface placeholder:text-surface-variant focus:ring-1 focus:ring-primary/50 py-4 px-5 rounded-lg transition-all duration-300 font-label tracking-wider text-sm resize-none"
                        placeholder="TRANSMISSION_DATA..."
                        rows="4"
                        {...contactForm.fields.message.as("text")}
                        required
                    ></textarea>
                    {#each contactForm.fields.message.issues() as issue}
                        <p class="text-red-500 text-sm">{issue.message}</p>
                    {/each}

                    {#if turnstileSiteToken}
                        <input {...contactForm.fields.turnStileToken.as("hidden", turnstileSiteToken)} />
                    {/if}
                </div>
            </div>

            <button class="cursor-pointer w-full bg-[#5df7dc] text-black font-display font-black tracking-widest px-10 py-5 rounded-lg text-sm hover:shadow-[0_0_30px_rgba(26,230,200,0.3)] transition-all duration-300 active:scale-95">
                Send Message
            </button>
        </form>
	</Dialog.Content>
</Dialog.Root>

<style>
    input,
    textarea {
        outline: none;
    }
</style>