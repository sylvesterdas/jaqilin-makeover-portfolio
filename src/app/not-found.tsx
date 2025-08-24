
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center text-center pt-24 md:pt-32">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto bg-card border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h1 className="font-headline text-8xl md:text-9xl text-primary drop-shadow-md">
                404
              </h1>
              <h2 className="mt-2 font-headline text-3xl md:text-4xl text-foreground">
                Page Not Found
              </h2>
              <p className="mt-4 text-lg text-foreground/80">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/">
                    <Home className="mr-2" />
                    Go to Homepage
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
