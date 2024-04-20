import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/spcai/about',
    component: ComponentCreator('/spcai/about', '9e7'),
    exact: true
  },
  {
    path: '/spcai/blog',
    component: ComponentCreator('/spcai/blog', '53e'),
    exact: true
  },
  {
    path: '/spcai/blog/archive',
    component: ComponentCreator('/spcai/blog/archive', 'cfe'),
    exact: true
  },
  {
    path: '/spcai/blog/first-blog-post',
    component: ComponentCreator('/spcai/blog/first-blog-post', 'eeb'),
    exact: true
  },
  {
    path: '/spcai/blog/long-blog-post',
    component: ComponentCreator('/spcai/blog/long-blog-post', '2f6'),
    exact: true
  },
  {
    path: '/spcai/blog/mdx-blog-post',
    component: ComponentCreator('/spcai/blog/mdx-blog-post', '141'),
    exact: true
  },
  {
    path: '/spcai/blog/tags',
    component: ComponentCreator('/spcai/blog/tags', 'c6a'),
    exact: true
  },
  {
    path: '/spcai/blog/tags/docusaurus',
    component: ComponentCreator('/spcai/blog/tags/docusaurus', '0c1'),
    exact: true
  },
  {
    path: '/spcai/blog/tags/facebook',
    component: ComponentCreator('/spcai/blog/tags/facebook', '5d7'),
    exact: true
  },
  {
    path: '/spcai/blog/tags/hello',
    component: ComponentCreator('/spcai/blog/tags/hello', '1ac'),
    exact: true
  },
  {
    path: '/spcai/blog/tags/hola',
    component: ComponentCreator('/spcai/blog/tags/hola', '65c'),
    exact: true
  },
  {
    path: '/spcai/blog/welcome',
    component: ComponentCreator('/spcai/blog/welcome', '294'),
    exact: true
  },
  {
    path: '/spcai/contact',
    component: ComponentCreator('/spcai/contact', 'e3d'),
    exact: true
  },
  {
    path: '/spcai/jobs/',
    component: ComponentCreator('/spcai/jobs/', '78d'),
    exact: true
  },
  {
    path: '/spcai/jobs/postdoc',
    component: ComponentCreator('/spcai/jobs/postdoc', 'a07'),
    exact: true
  },
  {
    path: '/spcai/jobs/software-engineer',
    component: ComponentCreator('/spcai/jobs/software-engineer', 'ee7'),
    exact: true
  },
  {
    path: '/spcai/members',
    component: ComponentCreator('/spcai/members', '4cd'),
    exact: true
  },
  {
    path: '/spcai/network',
    component: ComponentCreator('/spcai/network', '0a9'),
    exact: true
  },
  {
    path: '/spcai/publications',
    component: ComponentCreator('/spcai/publications', '96b'),
    exact: true
  },
  {
    path: '/spcai/research/patents',
    component: ComponentCreator('/spcai/research/patents', '498'),
    exact: true
  },
  {
    path: '/spcai/research/projects/',
    component: ComponentCreator('/spcai/research/projects/', 'c7a'),
    exact: true
  },
  {
    path: '/spcai/research/projects/chronolog',
    component: ComponentCreator('/spcai/research/projects/chronolog', '5aa'),
    exact: true
  },
  {
    path: '/spcai/research/projects/coeus',
    component: ComponentCreator('/spcai/research/projects/coeus', '77f'),
    exact: true
  },
  {
    path: '/spcai/research/projects/dayu',
    component: ComponentCreator('/spcai/research/projects/dayu', '4f3'),
    exact: true
  },
  {
    path: '/spcai/research/projects/dtio',
    component: ComponentCreator('/spcai/research/projects/dtio', '8d9'),
    exact: true
  },
  {
    path: '/spcai/research/projects/hermes',
    component: ComponentCreator('/spcai/research/projects/hermes', 'daa'),
    exact: true
  },
  {
    path: '/spcai/research/projects/iris',
    component: ComponentCreator('/spcai/research/projects/iris', '4a9'),
    exact: true
  },
  {
    path: '/spcai/research/projects/labios',
    component: ComponentCreator('/spcai/research/projects/labios', '777'),
    exact: true
  },
  {
    path: '/spcai/research/projects/viper',
    component: ComponentCreator('/spcai/research/projects/viper', '728'),
    exact: true
  },
  {
    path: '/spcai/research/projects/wisio',
    component: ComponentCreator('/spcai/research/projects/wisio', 'bdc'),
    exact: true
  },
  {
    path: '/spcai/resources/hardware-overview',
    component: ComponentCreator('/spcai/resources/hardware-overview', '3cc'),
    exact: true
  },
  {
    path: '/spcai/docs',
    component: ComponentCreator('/spcai/docs', '669'),
    routes: [
      {
        path: '/spcai/docs',
        component: ComponentCreator('/spcai/docs', '0a3'),
        routes: [
          {
            path: '/spcai/docs',
            component: ComponentCreator('/spcai/docs', 'f92'),
            routes: [
              {
                path: '/spcai/docs/ares/ares-user-guide',
                component: ComponentCreator('/spcai/docs/ares/ares-user-guide', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/ares/faq',
                component: ComponentCreator('/spcai/docs/ares/faq', 'e56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/category/ares-research-cluster',
                component: ComponentCreator('/spcai/docs/category/ares-research-cluster', '9d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/category/c-introduction',
                component: ComponentCreator('/spcai/docs/category/c-introduction', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/category/hermes',
                component: ComponentCreator('/spcai/docs/category/hermes', 'd5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/category/important-environment-variables',
                component: ComponentCreator('/spcai/docs/category/important-environment-variables', '065'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/category/installing-hpc-software',
                component: ComponentCreator('/spcai/docs/category/installing-hpc-software', 'a8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/category/linux-introduction',
                component: ComponentCreator('/spcai/docs/category/linux-introduction', '957'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/chronolog/index',
                component: ComponentCreator('/spcai/docs/chronolog/index', '36a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/adapters',
                component: ComponentCreator('/spcai/docs/hermes/adapters', 'fb6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/building-hermes',
                component: ComponentCreator('/spcai/docs/hermes/building-hermes', '0ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/buffer-organizer',
                component: ComponentCreator('/spcai/docs/hermes/components/buffer-organizer', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/buffer-pool',
                component: ComponentCreator('/spcai/docs/hermes/components/buffer-pool', '53c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/buffering-target',
                component: ComponentCreator('/spcai/docs/hermes/components/buffering-target', '6a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/data-placement',
                component: ComponentCreator('/spcai/docs/hermes/components/data-placement', '131'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/data-staging',
                component: ComponentCreator('/spcai/docs/hermes/components/data-staging', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/distributed-metadata',
                component: ComponentCreator('/spcai/docs/hermes/components/distributed-metadata', '55f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/examples',
                component: ComponentCreator('/spcai/docs/hermes/components/examples', '73b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/prefetcher',
                component: ComponentCreator('/spcai/docs/hermes/components/prefetcher', '34e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/runtime',
                component: ComponentCreator('/spcai/docs/hermes/components/runtime', '215'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/tagging',
                component: ComponentCreator('/spcai/docs/hermes/components/tagging', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/components/topology',
                component: ComponentCreator('/spcai/docs/hermes/components/topology', '637'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/configuration',
                component: ComponentCreator('/spcai/docs/hermes/configuration', '9b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/containers',
                component: ComponentCreator('/spcai/docs/hermes/containers', '508'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/deploying-hermes',
                component: ComponentCreator('/spcai/docs/hermes/deploying-hermes', '740'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/developer-guide',
                component: ComponentCreator('/spcai/docs/hermes/developer-guide', 'f64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/doxygen',
                component: ComponentCreator('/spcai/docs/hermes/doxygen', '1d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/faq',
                component: ComponentCreator('/spcai/docs/hermes/faq', 'a03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/main-scenario',
                component: ComponentCreator('/spcai/docs/hermes/main-scenario', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hermes/programming',
                component: ComponentCreator('/spcai/docs/hermes/programming', '00c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/cpp-introduction/hello-world',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/cpp-introduction/hello-world', '758'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/cmake-module-path',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/cmake-module-path', 'c8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/cmake-prefix-path',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/cmake-prefix-path', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/cpath',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/cpath', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/java-home',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/java-home', '058'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/ld-library-path',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/ld-library-path', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/ld-preload',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/ld-preload', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/library-path',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/library-path', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/path',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/path', 'bbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/important-environment-variables/pythonpath',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/important-environment-variables/pythonpath', 'f2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/installing-hpc-software/building-from-scratch',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/installing-hpc-software/building-from-scratch', 'e4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/installing-hpc-software/building-with-spack',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/installing-hpc-software/building-with-spack', '10e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/linux-introduction/choosing-an-os',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/linux-introduction/choosing-an-os', 'c40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/linux-introduction/ssh',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/linux-introduction/ssh', 'ac9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/hpc-tutorials/linux-introduction/using-a-terminal',
                component: ComponentCreator('/spcai/docs/hpc-tutorials/linux-introduction/using-a-terminal', '952'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/index',
                component: ComponentCreator('/spcai/docs/index', 'b42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/building-package',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/building-package', '5f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/custom-repos',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/custom-repos', 'a43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/design-motivation',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/design-motivation', 'f4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/future-work',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/future-work', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/getting-started',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/getting-started', '817'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/index',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/index', '6e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/cm1',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/cm1', '55a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/deepdrivemd',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/deepdrivemd', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/gadget2',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/gadget2', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/gadget4',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/gadget4', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/lammps',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/lammps', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/nyx',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/nyx', '923'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/openfoam',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/openfoam', '545'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/vpic',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/vpic', 'ae1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/vpic-kokkos',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/vpic-kokkos', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/packages/wrf',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/packages/wrf', '521'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/python-api',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/python-api', '68e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/resource-graph',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/resource-graph', 'b48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/schedulers',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/schedulers', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-cd/virtualization',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-cd/virtualization', 'e8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-util/argument-parsing',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-util/argument-parsing', 'b36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-util/builtin-wrappers',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-util/builtin-wrappers', 'f5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-util/hostfile',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-util/hostfile', 'c3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-util/index',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-util/index', '13e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/spcai/docs/jarvis/jarvis-util/program-execution',
                component: ComponentCreator('/spcai/docs/jarvis/jarvis-util/program-execution', '5a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/spcai/',
    component: ComponentCreator('/spcai/', 'f2e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
