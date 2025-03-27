
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import FareExamples from '@/components/organisms/FareExamples';
import { Alert, AlertDescription, AlertTitle } from '@/components/atoms/alert';
import { Card, CardContent } from '@/components/atoms/card';
import { Info, DollarSign, Calculator, BarChart3 } from 'lucide-react';

const FareBreakdown = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero section */}
        <section className="px-6 py-12 mb-10 bg-gradient-to-b from-background to-carp-lightBlue/20">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block bg-carp-lightBlue text-carp-blue rounded-full px-4 py-1 font-medium">
                  Transparent Pricing
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Understanding <span className="text-carp-blue">Fare Calculations</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Carp provides fair and transparent cost-sharing for all participants. See how we calculate fares to ensure everyone pays their proper share.
                </p>
              </div>
              
              <div className="w-full lg:w-2/5">
                <Card className="border-carp-blue/20 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <Calculator className="h-6 w-6 text-carp-blue" />
                      <h3 className="text-lg font-medium">Fare Calculator Formula</h3>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg mb-6">
                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1">Step 1: Calculate Total Trip Cost</div>
                        <code className="text-foreground text-sm">
                          (Miles ÷ MPG) × Gas Price + Parking Cost
                        </code>
                      </div>
                      
                      <div className="mb-3">
                        <div className="text-sm font-medium mb-1">Step 2: Calculate Per-Person Cost</div>
                        <code className="text-foreground text-sm">
                          Total Trip Cost ÷ Number of Riders
                        </code>
                      </div>
                    </div>
                    
                    <Alert className="bg-blue-50 border-carp-blue/20">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Fair Cost Distribution</AlertTitle>
                      <AlertDescription>
                        This formula ensures that both drivers and riders equally share the actual costs of the journey.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing philosophy section */}
        <section className="px-6 py-16 mb-12">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row items-start gap-12">
              {/* Left column */}
              <div className="w-full md:w-1/2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Pricing Philosophy</h2>
                  
                  <div className="mb-8 space-y-4">
                    <p className="text-muted-foreground">
                      At Carp, we believe in creating a system that's fair to both riders and drivers. 
                      Our pricing model is designed to distribute actual costs, not to generate profit.
                    </p>
                    
                    <p className="text-muted-foreground">
                      We understand that being a driver comes with extra effort. So we allow some flexibility with pricing, 
                      while providing guidance to keep costs reasonable for everyone involved.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-xl bg-amber-50 border border-amber-100">
                    <h3 className="font-medium text-amber-800 mb-3">Important Note About Pricing</h3>
                    <p className="text-sm text-amber-700">
                      This platform is not intended to turn a profit for drivers. Carp serves only to help share the burden of your commute,
                      reducing costs for everyone involved while making better use of vehicles already on the road.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-green-100 mr-4 mt-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Cost Sharing, Not Profit</h4>
                      <p className="text-sm text-muted-foreground">
                        By sharing the fixed costs of a journey across multiple people, everyone saves money compared to traveling alone.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-blue-100 mr-4 mt-1">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Flexible But Guided</h4>
                      <p className="text-sm text-muted-foreground">
                        We provide recommendations based on actual costs, but drivers have flexibility to adjust within reasonable bounds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right column - Diagram */}
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-lg mb-4 text-center">How Cost Sharing Works</h3>
                    
                    <div className="space-y-6 p-2">
                      {/* Solo driver */}
                      <div className="flex items-center">
                        <div className="w-36 text-sm font-medium">Solo Driver</div>
                        <div className="flex-1 relative h-10">
                          <div className="absolute inset-y-0 left-0 right-0 bg-red-100 rounded-md"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-red-700">
                            100% of costs ($15.75)
                          </div>
                        </div>
                      </div>
                      
                      {/* With 1 rider */}
                      <div className="flex items-center">
                        <div className="w-36 text-sm font-medium">Driver + 1 Rider</div>
                        <div className="flex-1 relative h-10">
                          <div className="absolute inset-y-0 left-0 w-1/2 bg-amber-100 rounded-l-md"></div>
                          <div className="absolute inset-y-0 left-1/2 right-0 bg-amber-200 rounded-r-md"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-amber-700">
                            <span className="w-1/2 text-center">50% ($7.88)</span>
                            <span className="w-1/2 text-center">50% ($7.88)</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* With 2 riders */}
                      <div className="flex items-center">
                        <div className="w-36 text-sm font-medium">Driver + 2 Riders</div>
                        <div className="flex-1 relative h-10">
                          <div className="absolute inset-y-0 left-0 w-1/3 bg-green-100 rounded-l-md"></div>
                          <div className="absolute inset-y-0 left-1/3 w-1/3 bg-green-200"></div>
                          <div className="absolute inset-y-0 left-2/3 right-0 bg-green-300 rounded-r-md"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-green-700">
                            <span className="w-1/3 text-center">33% ($5.25)</span>
                            <span className="w-1/3 text-center">33% ($5.25)</span>
                            <span className="w-1/3 text-center">33% ($5.25)</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* With 3 riders */}
                      <div className="flex items-center">
                        <div className="w-36 text-sm font-medium">Driver + 3 Riders</div>
                        <div className="flex-1 relative h-10">
                          <div className="absolute inset-y-0 left-0 w-1/4 bg-blue-100 rounded-l-md"></div>
                          <div className="absolute inset-y-0 left-1/4 w-1/4 bg-blue-200"></div>
                          <div className="absolute inset-y-0 left-2/4 w-1/4 bg-blue-300"></div>
                          <div className="absolute inset-y-0 left-3/4 right-0 bg-blue-400 rounded-r-md"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-blue-700">
                            <span className="w-1/4 text-center">25% ($3.94)</span>
                            <span className="w-1/4 text-center">25% ($3.94)</span>
                            <span className="w-1/4 text-center">25% ($3.94)</span>
                            <span className="w-1/4 text-center">25% ($3.94)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground text-center mt-6">
                      Example based on a 15-mile trip with 25 MPG, $3.50/gallon gas, and $6 parking
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Examples section */}
        <FareExamples />
      </main>
      
      <Footer />
    </div>
  );
};

export default FareBreakdown;
