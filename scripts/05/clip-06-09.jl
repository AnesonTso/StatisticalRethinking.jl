# Load Julia packages (libraries) needed for clip

using StatisticalRethinking
using CSV, StanSample, DataFrames, Statistics
using KernelDensity, MonteCarloMeasurements
using StatsPlots

ProjDir = @__DIR__

include("m5.2.jl")

if success(rc)

  # Describe the draws
  dfs = read_samples(sm; output_format=:dataframe)
  println("\nSample Particles summary:"); p_m_5_2 = Particles(dfs); p_m_5_2 |> display
  println("\nQuap Particles estimate:"); q_m_5_2 = quap(dfs); display(q_m_5_2)

  # Rethinking results

  rethinking_results = "
          mean   sd  5.5% 94.5%
    a     0.00 0.11 -0.17  0.17
    bM    0.35 0.13  0.15  0.55
    sigma 0.91 0.09  0.77  1.05
  ";

  xbar = mean(df[:, :Marriage])
  xstd = std(df[:, :Marriage])
  ybar = mean(df[:, :Divorce])
  ystd = std(df[:, :Divorce])

  xi = minimum(df[:, :Marriage_s]):0.01:maximum(df[:, :Marriage_s])
  yi = mean(dfs[:, :a]) .+ mean(dfs[:, :bM]) .* xi
  mu = link(dfs, [:a, :bM], xi)
  mu_r = [rescale(mu[i], ybar, ystd) for i in 1:length(xi)]
  mu_means_r = [mean(mu_r[i]) for i in 1:length(xi)]

  bnds_range = [[minimum(mu_r[i]), maximum(mu_r[i])] for i in 1:length(xi)]
  bnds_quantile = [quantile(mu_r[i], [0.055, 0.945]) for i in 1:length(xi)]
  bnds_hpd = [hpdi(mu_r[i], alpha=0.11) for i in 1:length(xi)];
  
  title = "Divorce rate vs. Marriage rate" * "\nshowing sample and hpd range"
  plot(xlab="Marriage age", ylab="Divorce rate",
    title=title)

  x_r = rescale(xi, xbar, xstd)
  for i in 1:length(xi)
    plot!([x_r[i], x_r[i]], bnds_range[i],
      color=:lightgrey, leg=false)
  end

  for i in 1:length(xi)
    plot!([x_r[i], x_r[i]], bnds_hpd[i],
      color=:grey, leg=false)
  end

  plot!(x_r , mu_means_r, color=:black)
  scatter!(df[:, :Marriage], df[:, :Divorce], leg=false, color=:darkblue)

  savefig("$ProjDir/Fig-06-09.png")

end

# End of `05/clip-06-10.jl`
