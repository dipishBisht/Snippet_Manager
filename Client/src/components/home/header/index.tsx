import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Header() {
  const codeString = `// Snippet Manager
  const snippetManager = {
    snippets: [],
    
    addSnippet(title, code, language) {
      const id = Date.now();
      this.snippets.push({
        id,
        title,
        code,
        language,
        createdAt: new Date(),
      });
      return id;
    },
    
    getSnippet(id) {
      return this.snippets.find(
        snippet => snippet.id === id
      );
    },
    
    getAllSnippets() {
      return this.snippets;
    },
    
    updateSnippet(id, updates) {
      const index = this.snippets.findIndex(
        snippet => snippet.id === id
      );
      if (index !== -1) {
        this.snippets[index] = {
          ...this.snippets[index],
          ...updates,
          updatedAt: new Date(),
        };
        return true;
      }
      return false;
    },
    
    deleteSnippet(id) {
      const index = this.snippets.findIndex(
        snippet => snippet.id === id
      );
      if (index !== -1) {
        this.snippets.splice(index, 1);
        return true;
      }
      return false;
    }
  };`
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/10 via-background to-primary/5 animate-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70">
                Organize your code snippets with ease
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Store, organize, and share your code snippets in one place. Boost your productivity with our powerful
                snippet manager.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="gap-1.5 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="transition-all duration-300">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-10 blur-xl"></div>
              <div className="relative glass-effect rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl">
                <div className="p-4 border-b bg-muted/50">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-sm font-medium">snippet-manager.js</div>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm overflow-hidden">
                  {/* <pre className="text-xs md:text-sm"> */}
                  <SyntaxHighlighter language="javascript" style={solarizedlight}>
                    {codeString}
                  </SyntaxHighlighter>
                  {/* </pre> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}