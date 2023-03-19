FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Security.API/Security.API.csproj", "Security.API/"]
RUN dotnet restore "Security.API/Security.API.csproj"
COPY . .
WORKDIR "/src/Security.API"
RUN dotnet build "Security.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Security.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Security.API.dll"]
