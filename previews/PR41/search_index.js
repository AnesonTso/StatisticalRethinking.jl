var documenterSearchIndex = {"docs":
[{"location":"references.html#References-1","page":"References","title":"References","text":"","category":"section"},{"location":"references.html#","page":"References","title":"References","text":"There is no shortage of good books on Bayesian statistics. A few of my favorites are:","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"Bolstad: Introduction to Bayesian statistics\nBolstad: Understanding Computational Bayesian Statistics\nGelman, Hill: Data Analysis using regression and multileve,/hierachical models\nMcElreath: Statistical Rethinking\nKruschke: Doing Bayesian Data Analysis\nLee, Wagenmakers: Bayesian Cognitive Modeling\nGelman, Carlin, and others: Bayesian Data Analysis","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"and a great read (and implementation in DynamicHMC.jl):","category":"page"},{"location":"references.html#","page":"References","title":"References","text":"Betancourt: A Conceptual Introduction to Hamiltonian Monte Carlo","category":"page"},{"location":"intro.html#StatisticalRethinking-1","page":"Home","title":"StatisticalRethinking","text":"","category":"section"},{"location":"intro.html#Introduction-1","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"intro.html#","page":"Home","title":"Home","text":"This package contains Julia versions of selected code snippets and mcmc models contained in the R package \"rethinking\" associated with the book Statistical Rethinking by Richard McElreath.","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"In the book and associated R package rethinking, statistical models are defined as illustrated below:","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"flist <- alist(\n  height ~ dnorm( mu , sigma ) ,\n  mu <- a + b*weight ,\n  a ~ dnorm( 156 , 100 ) ,\n  b ~ dnorm( 0 , 10 ) ,\n  sigma ~ dunif( 0 , 50 )\n)","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"Posterior values can be approximated by","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"# Simulate quadratic approximation (for simpler models)\nm4.31 <- quad(flist, data=d2)","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"or generated using Stan by:","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"# Generate a Stan model and run a simulation\nm4.32 <- ulam(flist, data=d2)","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"The author of the book states: \"If that (the statistical model) doesn't make much sense, good. ... you're holding the right textbook, since this book teaches you how to read and write these mathematical descriptions\" (page 77).","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"The StatisticalRethinkingJulia Github organization is intended to allow experimenting with this learning process using four available mcmc options in Julia:","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"CmdStan\nDynamicHMC\nTuringLang\nMamba","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"At least one other package is available for mcmc in Julia:","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"Klara","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"Time constraints prevented this option to be in StatisticalRethinkingJulia.","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"A secondary objective of StatisticalRethinkingJulia is to compare definition and execution of a variety of models in the above four mcmc packages.","category":"page"},{"location":"intro.html#","page":"Home","title":"Home","text":"Model scripts using Turing, Mamba, CmdStan or DynamicHMC can be found in TuringModels, StanModels, DynamicHMCModels and MambaModels, part of the StatisticalRethinkingJulia Github organization set of packages.","category":"page"},{"location":"versions.html#Versions-and-notes-1","page":"Versions","title":"Versions & notes","text":"","category":"section"},{"location":"versions.html#","page":"Versions","title":"Versions","text":"Developing rethinking must have been an on-going process over several years, StatisticalRethinkinh.jl will likely follow a similar path.","category":"page"},{"location":"versions.html#","page":"Versions","title":"Versions","text":"The initial version (v1) of StatisticalRethinking is really just a first attempt to capture the models and show ways of setting up those models, execute the models and post-process the results using Julia.\nAs mentioned above, a second objective of v1 is to experiment and compare the four selected mcmc options in Julia in terms of results, performance, ease of expressing models, etc.\nThe R package rethinking, in the experimental branch on Github, contains 2 functions quap and ulam (previously called map and map2stan) which are not in v1 of Statisticalrethinking.jl. It is my intention to study those and possibly include quap or ulam (or both) in a future of Statisticalrethinking.\nSeveral other interesting approaches that could become a good basis for such an endeavour are being explored in Julia, e.g. Soss.jl and Omega.jl.\nMany other R functions such as precis(), link(), shade(), etc. are not in v1, although some very early versions are being tested. Expect significant refactoring of those in future versions.\nThe Mamba examples should really use @everywhere using Mamba in stead of using Mamba. This was done to get around a limitation in Literate.jl to test the notebooks when running in distributed mode. \nIn the src directory of all packages is a file scriptentry.jl which defines an object script_dict which is used to control the generation of documentation, notebooks and .jl scripts in chapters and testing of the notebooks. See ?ScriptEntry or enter e.g. script_dict[\"02\"] in the REPL. In the model packages this file is suffixed by an indication of the used mcmc option. e.g. script_dict_d in DynamicHMCModels.\nA utility function, generate() is part of each package to regenerate notebooks and chapter scripts, please see ?generate. Again, e.g. generate_t in TuringModels generates all model notebooks and chapter scripts for Turing models.\nIn a similar fashion, borrowed from DynamicHMCExamples I define several variations on rel_path(). By itself, rel_path() points at the scr directory of StatisticalRethinking.jl and e.g. rel_path_s() points to the src directory of StanModels. The rel_path() version is typically used to read in data files. All others are used to locate directorres to read from or store generated files into.","category":"page"},{"location":"acknowledgements.html#Acknowledgements-1","page":"Acknowledgements","title":"Acknowledgements","text":"","category":"section"},{"location":"acknowledgements.html#Acknowledgements-2","page":"Acknowledgements","title":"Acknowledgements","text":"","category":"section"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"Richard Torkar has taken the lead in developing the Turing versions of the models in chapter 8 and subsequent chapters. ","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"Tamas Papp has been very helpful during the development of the DynamicHMC versions of the models.","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"The TuringLang team and #turing contributors on Slack have been extremely helpful! The Turing examples by Cameron Pfiffer are followed closely in several example scripts.","category":"page"},{"location":"acknowledgements.html#","page":"Acknowledgements","title":"Acknowledgements","text":"The  documentation has been generated using Literate.jl and Documenter.jl based on several ideas demonstrated by Tamas Papp in  DynamicHMCExamples.jl.","category":"page"},{"location":"layout.html#Layout-of-the-package-1","page":"Layout","title":"Layout of the package","text":"","category":"section"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"Instead of having all snippets in a single file, the snippets are organized by chapter and grouped in clips by related snippets. E.g. chapter 0 of the R package has snippets 0.1 to 0.5. Those have been combined into 2 clips:","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"clip-01-03.jl - contains snippets 0.1 through 0.3\nclip-04-05.jl - contains snippets 0.4 and 0.5.","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"These 2 files are in scripts/00 and later on processed by Literate.jl to create 3 derived versions, e.g. from clip_01_03.jl in scripts/00:","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"clip-01-03.md - included in the documentation\nclip-01-03.ipynb - stored in the notebooks/chapter directory\nclip-01-03.jl - stored in the chapters/chapter directory","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"Occasionally lines in scripts are suppressed when Literate processes input source files, e.g. in Turing scripts the statement #nb Turing.turnprogress(false); is only inserted in the generated notebook but not in the corresponding chapter .jl script. Similarly #src ... will only be included in the .jl scripts in the chapters subdirectories.","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"A single snippet clip will be referred to as 03/clip-02.jl. ","category":"page"},{"location":"layout.html#","page":"Layout","title":"Layout","text":"Models with names such as 08/m8.1t.jl, 04/m4.1s.jl, 04/m4.4m.jl and 04/m4.5d.jl generate mcmc samples using Turing.jl, CmdStan.jl, Mamba.jl or DynamicHMC.jl respectively. In some cases the results of the mcmc chains have been stored and retrieved (or regenerated if missing) in other clips, e.g. 04/clip-30s.jl.","category":"page"},{"location":"index.html#","page":"Functions","title":"Functions","text":"CurrentModule = StatisticalRethinking","category":"page"},{"location":"index.html#link-1","page":"Functions","title":"link","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"link(xrange, chain, vars, xbar) ","category":"page"},{"location":"index.html#StatisticalRethinking.link-NTuple{4,Any}","page":"Functions","title":"StatisticalRethinking.link","text":"link\n\nCompute the link function\n\nMethod\n\nlink(xrange, chain, vars, xbar) \n\nRequired arguments\n\n* `xrange::Turing model`  : Range over which link values are computed\n* `chain::Float64`             : Chain samples used\n* `vars::Float64`               : Variables in chain used\n* `xbar::Float64`               : Mean value of observed predictor\n\nReturn values\n\n* `result`                       : Vector of link values\n\n\n\n\n\n","category":"method"},{"location":"index.html#rel_path-1","page":"Functions","title":"rel_path","text":"","category":"section"},{"location":"index.html#","page":"Functions","title":"Functions","text":"rel_path(parts...)","category":"page"},{"location":"index.html#StatisticalRethinking.rel_path-Tuple","page":"Functions","title":"StatisticalRethinking.rel_path","text":"rel_path\n\nRelative path using the StatisticalRethinking src/ directory. Copied from DynamicHMCExamples.jl\n\nExample to get access to the data suqqbdirectory\n\nrel_path(\"..\", \"data\")\n\n\n\n\n\n","category":"method"}]
}