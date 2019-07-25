﻿// <auto-generated />
using System;
using EP.Balda.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EP.Balda.Data.Migrations.GameDbMigrations
{
    [DbContext(typeof(BaldaGameDbContext))]
    [Migration("20190626124302_InitialCreatePlayerDb")]
    partial class InitialCreatePlayerDb
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("EP.Balda.Data.Models.CellDb", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<char?>("Letter");

                    b.Property<long>("MapId");

                    b.Property<int>("X");

                    b.Property<int>("Y");

                    b.HasKey("Id");

                    b.HasIndex("MapId");

                    b.ToTable("Cells");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.GameDb", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("InitWord");

                    b.Property<long>("MapId");

                    b.HasKey("Id");

                    b.HasIndex("MapId")
                        .IsUnique();

                    b.ToTable("Games");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.MapDb", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Size");

                    b.HasKey("Id");

                    b.ToTable("Maps");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.PlayerDb", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Created");

                    b.Property<bool>("IsMoveAllowed");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<string>("NickName")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<string>("Password")
                        .IsRequired();

                    b.Property<int>("Score");

                    b.HasKey("Id");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.PlayerGame", b =>
                {
                    b.Property<long>("PlayerId");

                    b.Property<long>("GameId");

                    b.HasKey("PlayerId", "GameId");

                    b.HasIndex("GameId");

                    b.ToTable("PlayerGames");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.PlayerWord", b =>
                {
                    b.Property<long>("PlayerId");

                    b.Property<int>("WordId");

                    b.Property<long>("GameId");

                    b.HasKey("PlayerId", "WordId");

                    b.HasIndex("GameId");

                    b.HasIndex("WordId");

                    b.ToTable("PlayerWords");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.WordRuDb", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Word")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("WordsRu");
                });

            modelBuilder.Entity("EP.Balda.Data.Models.CellDb", b =>
                {
                    b.HasOne("EP.Balda.Data.Models.MapDb", "Map")
                        .WithMany("Cells")
                        .HasForeignKey("MapId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EP.Balda.Data.Models.GameDb", b =>
                {
                    b.HasOne("EP.Balda.Data.Models.MapDb", "Map")
                        .WithOne()
                        .HasForeignKey("EP.Balda.Data.Models.GameDb", "MapId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EP.Balda.Data.Models.PlayerGame", b =>
                {
                    b.HasOne("EP.Balda.Data.Models.GameDb", "Game")
                        .WithMany("PlayerGames")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EP.Balda.Data.Models.PlayerDb", "Player")
                        .WithMany("PlayerGames")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EP.Balda.Data.Models.PlayerWord", b =>
                {
                    b.HasOne("EP.Balda.Data.Models.GameDb", "Game")
                        .WithMany("PlayerWords")
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EP.Balda.Data.Models.PlayerDb", "Player")
                        .WithMany("PlayerWords")
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EP.Balda.Data.Models.WordRuDb", "Word")
                        .WithMany("PlayerWords")
                        .HasForeignKey("WordId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}