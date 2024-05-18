//https://tailgrids.com/components/pricing-tables

import PricingCard from "./PricingCard"

const Pricing = () => {
    return (
        <section className="dark:bg-dark relative z-10 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span className="text-primary mb-2 block text-lg font-semibold">
                                Pricing Table
                            </span>
                            <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] dark:text-white">
                                Our Pricing Plan
                            </h2>
                            <p className="text-body-color dark:text-dark-6 text-base">
                                There are many variations of passages of Lorem
                                Ipsum available but the majority have suffered
                                alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="-mx-4 flex flex-wrap">
                        <PricingCard
                            type="Personal"
                            price="$59"
                            subscription="year"
                            description="Perfect for using in a personal website or a client project."
                            buttonText="Choose Personal"
                        >
                            <List>1 User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                            <List>Use on 1 (one) project</List>
                            <List>3 Months support</List>
                        </PricingCard>
                        <PricingCard
                            type="Business"
                            price="$199"
                            subscription="year"
                            description="Perfect for using in a personal website or a client project."
                            buttonText="Choose Business"
                            active
                        >
                            <List>5 User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                            <List>Use on31 (Three) project</List>
                            <List>4 Months support</List>
                        </PricingCard>
                        <PricingCard
                            type="Professional"
                            price="$256"
                            subscription="year"
                            description="Perfect for using in a personal website or a client project."
                            buttonText="Choose Professional"
                        >
                            <List>Unlimited User</List>
                            <List>All UI components</List>
                            <List>Lifetime access</List>
                            <List>Free updates</List>
                            <List>Unlimited project</List>
                            <List>12 Months support</List>
                        </PricingCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing

const List = ({ children }: any) => {
    return (
        <p className="text-body-color dark:text-dark-6 text-base">{children}</p>
    )
}
